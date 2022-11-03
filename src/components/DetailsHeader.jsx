import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, songData }) => (
   <div className='relative w-full flex flex-col'>
      <div className='w-full bg-[#2a2a2a] sm:h-48 h-28'>
         <div className='absolute inset-0 flex items-center'>
            <img
               src={
                  artistId
                     ? artistData?.artists[artistId]?.atributes?.artwork?.url
                          .replace("{w}", "500")
                          .replace("{h}", "500")
                     : songData?.images.coverart
               }
               className='sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover'
               alt='art'
            />

            <div className='ml-5'>
               <p className='font-bold sm:text-3xl  text-xl text-white'>
                  {artistId
                     ? artistData?.artists[artistId].atributes?.name
                     : songData?.title}
               </p>
               {!artistId && (
                  <Link to={`artits/${songData?.artists[0].adamid} `}>
                     <p className='text-base text-gray-400 mt-2'>
                        {songData?.subtitle}
                     </p>
                     <p className='text-base text-gray-400'>
                        {artistId
                           ? artists?.genreNames[0]
                           : songData?.genres?.primary}
                     </p>
                  </Link>
               )}
            </div>
         </div>
      </div>
      <div className='w-full sm:h-44 h-24' />
   </div>
);

export default DetailsHeader;
