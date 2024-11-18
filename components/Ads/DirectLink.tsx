'use client';

import { useEffect } from 'react';

const DirectLink = () => {
  useEffect(() => {
    try {
      // Add the ad script
      const script = document.createElement('script');
      script.innerHTML = `
        var direct_link_urls = {
          "847590": "https://www.profitablecpmrate.com/v9726iqtbi?key=6f7df09c6b964ebdcfe0343452771059"
        };
        var popunder_frequency = 1; // How many clicks before popunder appears
        var direct_link_type = "DirectLink_1"; // Type of direct link
      `;
      document.head.appendChild(script);
      console.log('✅ Direct link configuration script added successfully');

      // Add the main ad script with proper URL
      const adScript = document.createElement('script');
      adScript.src =
        'https://www.profitablecpmrate.com/js/direct_link.js?v=' + Date.now(); // Add cache buster
      adScript.async = true;
      adScript.crossOrigin = 'anonymous'; // Add CORS header

      // Log when the main ad script loads successfully
      adScript.onload = () => {
        console.log('✅ Direct link main script loaded successfully');
        if (window.direct_link_urls) {
          console.log('📢 Direct link configuration:', {
            urls: window.direct_link_urls,
            frequency: window.popunder_frequency,
            type: window.direct_link_type
          });
        }
      };

      // Log if there's an error loading the script
      adScript.onerror = (error) => {
        console.error('❌ Failed to load direct link script. Details:', {
          error,
          scriptSrc: adScript.src,
          timestamp: new Date().toISOString()
        });
      };

      document.head.appendChild(adScript);
    } catch (error) {
      console.error('❌ Error setting up direct link ads:', error);
    }

    // Cleanup
    return () => {
      try {
        const scripts = Array.from(
          document.head.getElementsByTagName('script')
        );
        scripts.forEach((script) => {
          if (
            script.src.includes('direct_link.js') ||
            script.innerHTML.includes('direct_link_urls')
          ) {
            document.head.removeChild(script);
          }
        });
        console.log('🧹 Cleaned up direct link scripts');
      } catch (error) {
        console.error('❌ Error cleaning up direct link scripts:', error);
      }
    };
  }, []);

  return null;
};

export default DirectLink;
