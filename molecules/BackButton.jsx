import React from 'react';
import { useRouter } from 'next/router';
const BackButton = () => {
  const router = useRouter();
  return (
    <button alia-label="戻る" type="button" onClick={() => router.back()}>
      戻る
    </button>
  );
};

export default BackButton;
