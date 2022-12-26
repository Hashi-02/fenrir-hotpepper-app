import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Select from 'react-select';

const options = [
  { value: 1, label: '300m' },
  { value: 2, label: '500m' },
  { value: 3, label: '1000m' },
  { value: 4, label: '2000m' },
  { value: 5, label: '3000m' },
];

const ErrorText = () => (
  <p className="App-error-text">geolocation IS NOT available</p>
);

export default function Header() {
  const [isAvailable, setAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [selectedValue, setSelectedValue] = useState(options[2]);
  const router = useRouter();

  const isFirstRef = useRef(true);

  useEffect(() => {
    isFirstRef.current = false;
    if ('geolocation' in navigator) {
      setAvailable(true);
    }
  }, [isAvailable]);

  const getCurrentPosition = () => {
    setIsLoading(true);

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setPosition({ latitude, longitude });

      router.push({
        pathname: '/restaurants', //URL
        query: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          range: selectedValue.value,
          start: 1,
          count: 15,
          page: 1,
        }, //検索クエリ
      });
    });
  };

  if (isFirstRef.current) return <div className="App">Loading...</div>;
  return (
    <div className="App">
      {!isFirstRef && !isAvailable && <ErrorText />}
      <div>
        <div>
          {isAvailable && (
            <div>
              <button onClick={getCurrentPosition}>検索する</button>
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
        <div style={{ width: '300px', margin: '10px' }}>
          <Select
            options={options}
            defaultValue={selectedValue}
            onChange={(value) => {
              value ? setSelectedValue(value) : null;
            }}
          />
        </div>
      </div>
    </div>
  );
}
