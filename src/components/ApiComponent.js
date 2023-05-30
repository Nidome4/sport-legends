import React, { useEffect, useState } from 'react';

function ApiComponent({ url, method, payload, headers, response }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const setResponse = (json) => {
    response(json);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url, {
          method,
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json',
            ...headers,
          },
        });
        const jsonData = await response.json();
        setData(jsonData);
        setResponse(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url, method, payload, headers]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}    
    </div>
  );
}

export default ApiComponent;