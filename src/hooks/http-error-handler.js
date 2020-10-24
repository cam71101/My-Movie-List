import { useState, useEffect } from 'react';

export default (httpClient) => {
  const [error, setError] = useState(false);

  const reqInterceptor = httpClient.interceptors.request.use((req) => {
    setError(false);
    return req;
  });
  const resInterceptor = httpClient.interceptors.response.use(
    (res) => res,
    (err) => {
      setError(err);
    }
  );

  useEffect(() => {
    return () => {
      httpClient.interceptors.request.eject(reqInterceptor);
      httpClient.interceptors.response.eject(resInterceptor);
    };
  }, [
    reqInterceptor,
    resInterceptor,
    httpClient.interceptors.request,
    httpClient.interceptors.response,
  ]);

  const errorConfirmedHandler = () => {
    setError(false);
  };

  return [error, errorConfirmedHandler];
};
