import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
   reducerPath: "ShazamCoreApi",
   baseQuery: fetchBaseQuery({
      baseUrl: "https://shazam-core.p.rapidapi.com/v1",
      prepareHeaders: (headers) => {
         headers.set(
            "X-RapidAPI-Key",
            "7343ac501amsh80d633390d27a4bp173831jsn30a5addfa74a"
         );

         return headers;
      },
   }),

   endpoints: (builder) => ({
      getTopCharts: builder.query({ query: () => "/charts/world" }),
      getSongsByGenre: builder.query({
         query: (genre) => `/charts/genre-world?genre_code=${genre}`,
      }),
      getSongsDetail: builder.query({
         query: ({ songid }) => `/tracks/details?track_id=${songid}`,
      }),
      getSongRelated: builder.query({
         query: ({ songid }) => `/tracks/related?track_id=${songid}`,
      }),
      getArtistDetails: builder.query({
         query: (artistId) => `/artists/details?artist_id=${artistId}`,
      }),
      getSongsByCountry: builder.query({
         query: (countryCode) => `/charts/country?country_code=${countryCode}`,
      }),
      getSongsBySearch: builder.query({
         query: (searchTerm) =>
            `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
      }),
   }),
});

export const {
   useGetTopChartsQuery,
   useGetSongsByGenreQuery,
   useGetSongsDetailQuery,
   useGetSongRelatedQuery,
   useGetArtistDetailsQuery,
   useGetSongsByCountryQuery,
   useGetSongsBySearchQuery,
} = shazamCoreApi;
