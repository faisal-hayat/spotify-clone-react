import React from "react";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

/* 
const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3374d683efmshd23eaa3039f28d4p134c74jsn41106535e1e7',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  };
  
  fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
*/
export const shazamCoreApi = createApi({
  reducerPath : 'shazamCoreApi',
  baseQuery : fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '3374d683efmshd23eaa3039f28d4p134c74jsn41106535e1e7');
      return headers;
    },
  }), 
  endpoints: (builder) => ({
    getTopCharts: builder.query({query: () => '/charts/world'}),
    getSongDetails: builder.query({query: ({ songid }) => `/tracks/details?track_id=${ songid }` }),
    getSongRelated: builder.query({query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamCoreApi;