// eslint-disable-next-line import/no-anonymous-default-export
export default {
  app: {
    apiUrl:
      process.env.REACT_APP_PUBLIC_API_BASE_URL ||
      "http://localhost:8000",
  },
};
