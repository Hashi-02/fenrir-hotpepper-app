import React from 'react';
import { useRouter } from 'next/router';
import styles from './styles/BackButton.module.scss';

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      className={styles.button}
      alia-label="戻る"
      type="button"
      onClick={() => router.back()}
    >
      戻る
    </button>
  );
};

export default BackButton;
