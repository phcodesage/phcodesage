import styles from './loading-spinner.module.scss';

const LoadingSpinner = () => {
  return (
    <div className={styles.spinnerWrapper}>
      <div className={styles.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
