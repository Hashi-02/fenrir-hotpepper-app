import styles from './styles/footer.module.scss';
export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <p>GPSグルメサーチ</p>
        <p className={styles.copyright}>Copyright </p>
      </div>
    </div>
  );
}
