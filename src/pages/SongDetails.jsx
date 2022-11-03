import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import {
   useGetSongsDetailQuery,
   useGetSongRelatedQuery,
} from "../redux/services/shazamCore";

const SongDetails = () => {
   const { songid } = useParams();
   const dispatch = useDispatch();
   const { activeSong, isPlaying } = useSelector((state) => state.player);
   const { data: songData, isFetching: isFetchingSongsDetail } =
      useGetSongsDetailQuery({ songid });
   const {
      data,
      isFetching: isFetchingRelatedSongs,
      error,
   } = useGetSongRelatedQuery({ songid });

   const handlePauseClick = () => {
      dispatch(playPause(false));
   };
   const handlePlayClick = (song, i) => {
      dispatch(setActiveSong({ song, data, i }));
      dispatch(playPause(true));
   };

   if (isFetchingSongsDetail || isFetchingRelatedSongs)
      return <Loader title='Buscando detalles..' />;

   if (error) return <Error />;

   console.log(songData);
   return (
      <div className='flex flex-col'>
         <DetailsHeader artistId='' songData={songData} />
         <div className='mb-10'>
            <h2 className='text-white  text-3xl font-bold'>Letras: </h2>
         </div>
         <div className='mt-5'>
            {songData?.sections[1]?.type === "LYRICS" ? (
               songData?.sections[1]?.text.map((line, i) => (
                  <p key={i} className='text-gray-400 text-base my-3'>
                     {line}
                  </p>
               ))
            ) : (
               <p className='text-gray-400 text-base my-3'>
                  "Lo Sentimos, No se Encontraron Letras para Esta Canción :/"
               </p>
            )}
         </div>
         <RelatedSongs
            data={data}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
         />
      </div>
   );
};

export default SongDetails;
