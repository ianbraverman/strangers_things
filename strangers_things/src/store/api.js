import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const COHORT = "2401-FSA-ET-WEB-FT-SF";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `https://strangers-things.herokuapp.com/api/${COHORT}`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      token && headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: () => ({}),
});

export default api;
