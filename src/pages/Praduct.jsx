import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CardAyrish } from '../redux/Product';

function Praduct() {
    let dispach =useDispatch();
    const cardItems2 = useSelector((state) => state.product);
    console.log(cardItems2);
    function card(e){
     dispach(CardAyrish(e))
    }
  return (
    <>
        <div className='max-w-[1280px] mx-auto border-b-[1px]'>
            <h2 className='text-[30px]'>Sevimli Animelarim</h2>
        </div>
    <div className='div-3 pb-10 pt-3'>
    {cardItems2.map((e, index) => (
        <div key={e.id} style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${e.img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundPositionY: "100%",
        }} className='max-w-[316px] h-[450px] flex flex-col justify-between'>
            <div className='flex justify-between items-center rounded-[10px] p-1'>
                <span className='bg-[#f29824] text-white py-1 px-2 rounded-[5px] text-[14px] font-[600]'>{e.year}</span>
                <span className='bg-[#0303032d] text-white py-1 px-2 rounded-[5px] text-[14px] font-[600]'>{e.episodeCount}-{e.releasedEpisodes}</span>
                <span onClick={()=>{card(e.id)}} className='text-[#fff]'><img className='w-6 h-6' src="   https://cdn-icons-png.flaticon.com/512/9426/9426995.png " alt="" /></span>
            </div>
            <div className='bg-[#00000061] hover:bg-[#fefefe] hover:text-[#000]'>
                <p className='text-[#fff] hover:text-[#000] text-[20px] p-3'>{e.name}</p>
            </div>
        </div>
    ))}
</div>
    </>
  )
}

export default Praduct