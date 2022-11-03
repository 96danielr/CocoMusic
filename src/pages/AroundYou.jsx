import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { useGetSongsByCountryQuery } from "../redux/services/shazamCore";
const AroundYou = () => {
   const [loading, setLoading] = useState(true);
   const [country, setCountry] = useState("");
   const { activeSong, isPlaying } = useSelector((state) => state.player);
   const { data, isFetching, error } = useGetSongsByCountryQuery(country);

   useEffect(() => {
      axios
         .get(
            "https://geo.ipify.org/api/v2/country?apiKey=at_DCfUA9EElyqBI3ty5mDmRKSusFAM8&ipAddress=8.8.8.8"
         )
         .then((res) => setCountry(res?.data?.location?.country))
         .catch((err) => console.log(err))
         .finally(() => setLoading(false));
      //at_DCfUA9EElyqBI3ty5mDmRKSusFAM8
      //
      console.log(country);
   }, [country]);

   if (isFetching && loading)
      return <Loader title='cargando Caciones cerca de ti' />;
   if (error && country) return <Error />;

   return (
      <div className='flex flex-col'>
         <h2 className='font-bold text-3xl text-white text-left mt-4 mb-6'>
            Caciones Cerca de mi
         </h2>
         <span className='font-bold text-white ml-4'>{country}</span>
         <div className='flex flex-wrap sm:justify-start  justify-center gap-8'>
            {data?.map((song, i) => (
               <SongCard
                  key={song.key}
                  song={song}
                  isPlaying={isPlaying}
                  activeSong={activeSong}
                  data={data}
                  i={i}
               />
            ))}
         </div>
      </div>
   );
};

export default AroundYou;
