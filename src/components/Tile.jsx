import React, { useState } from 'react'

const Tile = ({src,lastupdated,createdby,website}) => {
  const [test,setTest]=useState(false);
  return (
    <div className='border-2 m-2 border-black rounded-xl'>
      
      <div className="flex flex-row gap-10 m-6 ">
    <img src={src} alt="" height="100" width="100" />
    <div>
      <div className='flex flex-row gap-2'>
      <p className="text-blue-950 font-bold">Last Updated : </p>
      <p >{lastupdated}</p>
      </div>
      <div  className='flex flex-row gap-2'>
      <p className="text-blue-950 font-bold">Created By : </p>
      <p>{createdby}</p>
      </div>
      <div  className='flex flex-row gap-2'>
      <p className="text-blue-950 font-bold">Connector Website Link : </p>
      <p>{website}</p>
      </div>
  
    </div>
    <div className='flex flex-col gap-2'>
      <button className='bg-blue-500 rounded text-yellow-200 p-1'>edit</button>
      <button className='bg-red-500 rounded text-yellow-200 p-1'>delete</button>
      <button className='bg-green-500 rounded text-yellow-200 p-1' onClick={()=>setTest(test==true?false:true)}>test</button>
    </div>

  </div>
    {test==true && <p className="text-red-500 font-bold text-center text-2xl">testing...</p>}
  </div>

    
  )
}

export default Tile
