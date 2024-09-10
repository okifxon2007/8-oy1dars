import React, { useEffect, useState } from 'react'

function Home() {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(true);
  
    useEffect(() => {
      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
          setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);
      } 
      if(seconds==3){
        setSeconds(0)
      }
      return () => clearInterval(interval);
    }, [isActive, seconds]);
    let anime=[
        {name:"Naruto",img:"https://avatars.dzeninfra.ru/get-zen_doc/4219899/pub_60709d1d6594337d818bf229_6070a108c64ef5217e8b7bfa/scale_1200"},
        {name:"Naruto",img:"https://a.allegroimg.com/original/1178af/ca79e9624949b36c4aa2d73f65f7"},
        {name:"Naruto",img:"https://www.amazingame.ru/upload/iblock/d14/fe5mc9szblbr87ik7ome8w61det3jbk1/202108120855033.jpg"},
        {name:"Naruto",img:"https://i.ytimg.com/vi/COlZbYPqpmw/maxresdefault.jpg"},
    ]
  return (
    <>
    <div style={{
            backgroundImage: " linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(https://i.pinimg.com/originals/b3/fb/8e/b3fb8e5ef569e3c6ed11739a0a42a6aa.jpg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  backgroundPosition: "center",}} className='w-full h-[100vh] flex flex-col justify-center items-center mt-[-10vh] text-white'>
        <div  className='max-w-[1280px] mx-auto div-1 '>
            <div className=''>
                <p className='text-[#f29824] text-[18px]'>Hamma Animelar</p>
                <h2 className='font-[600] mt-2 text-[50px] leading-[56px]'>Naruto Ajoyib Anime</h2>
                <p className='text-[20px] mt-4 leading-[22px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur dignissimos perferendis voluptatum nulla minima! Vero, vitae quae atque blanditiis nihil similique quaerat possimus iure non quo distinctio totam esse, nesciunt sequi repellat. Quas illum sequi et quae similique, maxime cumque natus velit tempora quisquam commodi saepe! Qui laudantium voluptatibus voluptatum, sunt reprehenderit at in nostrum officia repellendus porro animi minus?</p>
                <div className='flex items-center gap-4 mt-7'>
                 <span className='text-[#f29824] font-[800] text-[24px]'>2024</span>
                 <img className='h-10 ' src="   https://cdn-icons-png.flaticon.com/512/11607/11607499.png " alt="" />
                <button className='bg-[#f29824] h-10 px-5 rounded-[20px] font-[700] '>KORISH</button>
                </div>
            </div>
            <div className='flex justify-end'>
            <img className='w-[316px] h-[450px]' src="https://i.ebayimg.com/images/g/J9UAAOSwtFxb3iZc/s-l500.jpg" alt="" />
            </div>
        </div>
    </div>
    <div className='max-w-[1280px] mx-auto'>
        <div className='flex justify-between items-center py-16'>
          <div className='text-[#f29824] flex flex-wrap gap-4'>
            <button className='border-[1px] py-1 px-3 border-[#f29824] rounded-[5px] font-[600] text-[18px] hover:bg-[#f29824] hover:text-white'>Hamma Animelar</button>
            <button  className='border-[1px] py-1 px-3 border-[#f29824] rounded-[5px] font-[600] text-[18px] hover:bg-[#f29824] hover:text-white'>Yakunlangan Animelar</button>
            <button className='border-[1px] py-1 px-3 border-[#f29824] rounded-[5px] font-[600] text-[18px] hover:bg-[#f29824] hover:text-white'>Anime Filim</button>
            <button className='border-[1px] py-1 px-3 border-[#f29824] rounded-[5px] font-[600] text-[18px] hover:bg-[#f29824] hover:text-white'>Anime Content</button>
          </div>
          <button className='text-[#f29824] border-[1px] py-1 px-3 border-[#f29824] rounded-[5px] font-[600] text-[18px] hover:bg-[#f29824] hover:text-white'>Barchasi ›</button>
        </div>
    </div>
    </>
   
  )
}

export default Home