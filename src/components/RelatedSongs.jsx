import SongBar from "./SongBar";
const RelatedSongs = ({
   data,
   isPlaying,
   activeSong,
   handlePauseClick,
   handlePlayClick,
   artistId,
}) => (
   <div className='fex fle-col mt-2'>
      <h1 className='font-bold  text-3xl text-white mt-2'>Canciones</h1>
      <div className='mt-6 w-full flex flex-col'>
         {data?.map((song, i) => (
            <SongBar
               key={`${song.key}-${artistId}`}
               song={song}
               i={i}
               artistId={artistId}
               isPlaying={isPlaying}
               activeSong={activeSong}
               handlePauseClick={handlePauseClick}
               handlePlayClick={handlePlayClick}
            />
         ))}
      </div>
   </div>
);

export default RelatedSongs;
