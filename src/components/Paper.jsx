import React from 'react'

const Paper = ({closePaper, currentItem}) => {
  return (
    <div className={`bg-[url('/assets/poem-bg.png')] bg-cover w-full h-full bg-no-repeat absolute top-0 right-0 bottom-0 left-0 z-20`}>
      <div className='w-full h-full mx-auto px-28 py-24'>
        <div className=' w-full h-full flex items-center justify-evenly'>
          <img src={currentItem.img_url} alt="" className='h-[500px] w-auto drop-shadow-2xl'/>
          <p className='text-4xl w-[50%]'>{currentItem.content}</p>
        </div>
        <img src="/assets/close.png" alt="" className='absolute top-10 right-10 w-[100px] h-auto drop-shadow-2xl cursor-pointer' onClick={closePaper}/>
      </div>
      
    </div>
  )
}

export default Paper