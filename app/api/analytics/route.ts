import { NextResponse } from 'next/server';

const UMAMI_WEBSITE_ID = process.env.UMAMI_WEBSITE_ID;
const UMAMI_API_URL = process.env.UMAMI_API_URL || 'https://api.umami.is';
const UMAMI_API_TOKEN = process.env.UMAMI_API_TOKEN;

interface UmamiStats {
  pageviews: {
    value: number;
  };
  uniques: {
    value: number;
  };
  devices: Array<{
    device: string;
    value: number;
  }>;
  countries: Array<{
    value: string;
    count: number;
  }>;
}

export async function GET() {
  try {
    // Get current date range
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 30); // Last 30 days

    const response = await fetch(
      `${UMAMI_API_URL}/api/websites/${UMAMI_WEBSITE_ID}/stats?startAt=${startDate.getTime()}&endAt=${endDate.getTime()}`,
      {
        headers: {
          Authorization: `Bearer ${UMAMI_API_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch analytics');
    }

    const stats: UmamiStats = await response.json();

    // Process the data
    const devices = {
      desktop: stats.devices.find((d) => d.device === 'desktop')?.value || 0,
      mobile: stats.devices.find((d) => d.device === 'mobile')?.value || 0,
      tablet: stats.devices.find((d) => d.device === 'tablet')?.value || 0
    };

    const locations = stats.countries.map((country) => ({
      country: country.value,
      visits: country.count
    }));

    return NextResponse.json({
      pageViews: stats.pageviews.value,
      uniqueVisitors: stats.uniques.value,
      devices,
      locations,
      rawData: stats // Include raw data for debugging
    });
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics data' },
      { status: 500 }
    );
  }
}
