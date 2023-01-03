import styles from './styles/footer.module.scss';
export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <p>GPSグルメサーチ</p>
        <p className={styles.copyright}>&copy;2022-2023 HashinoYuto </p>
      </div>
    </div>
  );
}
