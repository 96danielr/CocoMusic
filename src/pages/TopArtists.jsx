import React from "react";

import { ArtistCard, Loader, Error } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopArtists = () => {
   const { data, isFetching, error } = useGetTopChartsQuery();

   if (isFetching) return <Loader title='Top Canciones' />;
   if (error) return <Error />;

   return (
      <div className='flex flex-col'>
         <h2 className='font-bold text-3xl text-white text-left mt-4 mb-6'>
            Explora el Top de Artistas
         </h2>

         <div className='flex flex-wrap sm:justify-start  justify-center gap-8'>
            {data?.map((track) => (
               <ArtistCard key={track.key} track={track} />
            ))}
         </div>
      </div>
   );
};

export default TopArtists;
