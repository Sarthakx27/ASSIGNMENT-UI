import React from 'react'

const ChooseUs = () => {
  return (
    <div className='font-display w-11/12 mx-auto flex flex-col justify-center text-center items-center pt-10 lg:pt-20'>
      <div>
      <h1 className=' font-bold md:text-3xl lg:text-5xl text-gray-800'>WHY CHOOSE US?</h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-16 mt-10 lg:mt-20'>
        <div className=' lg:row-span-2 col-span-2 mb-10 lg:mb-0'>
            <img className=' rounded-lg' src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='grid grid-cols-2 gap-3'>
        <div className='flex flex-col border-2 rounded-3xl justify-center items-center px-5 py-7 md:px-16 md:py-10 lg:px-5 lg:py-10 hover:bg-slate-50 duration-500'>
        <div className=' bg-blue-100 rounded-2xl relative h-16 w-16 md:w-28 md:h-28 lg:h-28 lg:w-28 flex justify-center items-center'>
          <img className=' w-full'  src="https://www.cantechnologies.co.in/wp-content/uploads/2020/04/icon1_Artboard-1-1.png" alt="" />
          </div>
          <h1 className=' py-4 md:py-7 lg:py-7 font-bold text-base md:text-xl lg:text-xl '>USER FRIENDLY​</h1>
          <p className=' text-gray-600 text-xs md:text-base lg:text-base'>We understand when something is user-friendly, it is hassle-free and workable.</p>
        </div>
         <div className='flex flex-col border-2 rounded-3xl justify-center items-center px-5 py-7 md:px-16 md:py-10 lg:px-5 lg:py-10 hover:bg-slate-50 duration-500'>
          <div className=' bg-blue-100 rounded-2xl relative h-16 w-16 md:w-28 md:h-28 lg:h-28 lg:w-28 flex justify-center items-center'>
          <img className=' w-full'  src="https://www.cantechnologies.co.in/wp-content/uploads/2020/04/icon2-01.png" alt="" />
          </div>
          <h1 className=' py-4 md:py-7 lg:py-7 font-bold text-base md:text-xl lg:text-xl '>INNOVATION​</h1>
          <p className=' text-gray-600 text-xs md:text-base lg:text-base'>We always come up with lot of innovative ideas making things faster and efficient.</p>
        </div>
         <div className='flex flex-col border-2 rounded-3xl justify-center items-center px-5 py-7 md:px-16 md:py-10 lg:px-5 lg:py-10 hover:bg-slate-50 duration-500'>
          <div className=' bg-blue-100 rounded-2xl relative h-16 w-16 md:w-28 md:h-28 lg:h-28 lg:w-28 flex justify-center items-center'>
          <img className=' w-full'  src="https://www.cantechnologies.co.in/wp-content/uploads/2020/04/icon3-01.png" alt="" />
          </div>
          <h1 className=' py-4 md:py-7 lg:py-7 font-bold text-base md:text-xl lg:text-xl '>SIMPLE & PROFESSIONAL​</h1>
          <p className=' text-gray-600 text-xs md:text-base lg:text-base'>We believe "Simplicity is the best policy" and so, we make software & websites that appear simple and professional.</p>
        </div>
         <div className='flex flex-col border-2 rounded-3xl justify-center items-center px-5 py-7 md:px-16 md:py-10 lg:px-5 lg:py-10 hover:bg-slate-50 duration-500'>
          <div className=' bg-blue-100 rounded-2xl relative h-16 w-16 md:w-28 md:h-28 lg:h-28 lg:w-28 flex justify-center items-center'>
          <img className=' w-full'  src="https://www.cantechnologies.co.in/wp-content/uploads/2020/04/icon4-01.png" alt="" />
          </div>
          <h1 className=' py-4 md:py-7 lg:py-7 font-bold text-base md:text-xl lg:text-xl '>BEST QUALITY</h1>
          <p className=' text-gray-600 text-xs md:text-base lg:text-base'>We might be on a higher side of the budget, but hey, Quality Never Comes Cheap! And we deliver nothing but the best!</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs