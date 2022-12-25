import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const ErrorText = () => (
  <p className="App-error-text">geolocation IS NOT available</p>
);

export default function Home() {
  const [isAvailable, setAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const router = useRouter();

  // useEffectが実行されているかどうかを判定するために用意しています
  const isFirstRef = useRef(true);

  /*
   * ページ描画時にGeolocation APIが使えるかどうかをチェックしています
   * もし使えなければその旨のエラーメッセージを表示させます
   */
  useEffect(() => {
    isFirstRef.current = false;
    if ('geolocation' in navigator) {
      setAvailable(true);
    }
  }, [isAvailable]);

  const getCurrentPosition = () => {
    setIsLoading(true);
    console.log(position.latitude == null);
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setPosition({ latitude, longitude });
      console.log(position.coords.latitude);
      router.push({
        pathname: '/restaurants', //URL
        query: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          range: 3,
        }, //検索クエリ
      });
    });
  };

  // useEffect実行前であれば、"Loading..."という呼び出しを表示させます
  if (isFirstRef.current) return <div className="App">Loading...</div>;
  return (
    <div className="App">
      <p>Geolocation API Sample</p>
      {!isFirstRef && !isAvailable && <ErrorText />}
      {isAvailable && (
        <div>
          <button onClick={getCurrentPosition}>Get Current Position</button>
          {isLoading && (
            <>
              {position.latitude == null ? (
                <div className="App">Loading...</div>
              ) : (
                <div>
                  latitude: {position.latitude}
                  <br />
                  longitude: {position.longitude}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
