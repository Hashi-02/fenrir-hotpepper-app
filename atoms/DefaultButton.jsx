import Link from 'next/link';
import React from 'react';
import styles from './styles/DefaultButton.module.scss';

const DefaultButton = (props) => {
  return (
    <div>
      <Link href={props.url} target="_blank">
        <button className={styles.button}>{props.text}</button>
      </Link>
    </div>
  );
};

export default DefaultButton;
