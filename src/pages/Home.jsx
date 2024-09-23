import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardQoshish } from '../redux/Product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Home() {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(true);
    const cardItems = useSelector((state) => state.counter);
    const cardItems2 = useSelector((state) => state.product);
    
    console.log(cardItems2);
    let dispach=useDispatch()
    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds((prevSeconds) => {
                    if (prevSeconds === 3) {
                        return 0; 
                    }
                    return prevSeconds + 1;
                });
            }, 3000);
        }
        return () => clearInterval(interval); 
    }, [isActive]);

    let anime = [
        {name:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis dolore aut quasi quod cupiditate enim, ipsa maiores aspernatur esse reiciendis, odio earum aperiam sit. Exercitationem asperiores voluptas quo eum? ", img:"https://picsum.photos/200"},
        {name:"            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis dolore aut quasi quod cupiditate enim, ipsa maiores aspernatur esse reiciendis, odio earum aperiam sit. Exercitationem asperiores voluptas quo eum?        ", img:"https://picsum.photos/200/300"},
        {name:"       Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rem dolorum dignissimos quis voluptate corrupti praesentium nemo repudiandae nulla fugit! Dolorem quo aliquam at placeat.        ", img:"https://picsum.photos/200/300?grayscale"},
        {name:"         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit cupiditate vitae rem repellendus omnis optio numquam assumenda dolorum sint placeat soluta voluptatem distinctio eum facere sapiente harum quasi, hic sequi?        ", img:"https://picsum.photos/seed/picsum/200/300"},
    ];
   
function card(e){
    toast.success("Maxsulot qoshildi");
dispach(CardQoshish(e))
}
    return (
        <>
            <div style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${anime[seconds].img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
                backgroundPosition: "center",
            }} className='w-full h-[100vh] flex flex-col justify-center items-center mt-[-10vh] text-white'>
                <div className='max-w-[1280px] mx-auto div-1 '>
                    <div className=''>
                        <p className='text-[#f29824] text-[18px]'>Magazin</p>
                        <h2 className='font-[600] mt-2 text-[50px] leading-[56px]'>{cardItems[seconds].name}</h2>
                        <p className='text-[20px] mt-4 leading-[22px]'>{anime[seconds].name}</p>
                        <div className='flex items-center gap-4 mt-7'>
                            <span className='text-[#f29824] font-[800] text-[24px]'>{cardItems[seconds].year}</span>
                            <img className='h-10 ' src="   https://cdn-icons-png.flaticon.com/512/11607/11607499.png " alt="" />
                            <button className='bg-[#f29824] h-10 px-5 rounded-[20px] font-[700] '>Magazin1ga otish</button>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <img className='w-[316px] h-[450px]' src={cardItems[seconds].img} alt="" />
                    </div>
                </div>
            </div>
            <div className='max-w-[1280px] mx-auto'>
                <div className='flex justify-between items-center py-16'>
                    <div className='text-[#f29824] flex flex-wrap gap-4'>
                        <button className='border-[1px] py-1 px-3 border-[#f29824] rounded-[5px] font-[600] text-[18px] hover:bg-[#f29824] hover:text-white'>Hamma magazinlar</button>
                        <button className='border-[1px] py-1 px-3 border-[#f29824] rounded-[5px] font-[600] text-[18px] hover:bg-[#f29824] hover:text-white'>Yakunlangan maxsulotlar</button>
                        <button className='border-[1px] py-1 px-3 border-[#f29824] rounded-[5px] font-[600] text-[18px] hover:bg-[#f29824] hover:text-white'>yangi magazin</button>
                        <button className='border-[1px] py-1 px-3 border-[#f29824] rounded-[5px] font-[600] text-[18px] hover:bg-[#f29824] hover:text-white'>...</button>
                    </div>
                    <button className='text-[#f29824] border-[1px] py-1 px-3 border-[#f29824] rounded-[5px] font-[600] text-[18px] hover:bg-[#f29824] hover:text-white'>Barchasi ›</button>
                </div>
                <div className='div-3 pb-10'>
                    {cardItems.map((e, index) => (
                        <div key={e.id} style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${e.img})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundPositionY: "100%",
                        }} className='max-w-[316px] h-[450px] flex flex-col justify-between'>
                            <div className='flex justify-between items-center rounded-[10px] p-1'>
                                <span className='bg-[#f29824] text-white py-1 px-2 rounded-[5px] text-[14px] font-[600]'>2024</span>
                                <span className='bg-[#0303032d] text-white py-1 px-2 rounded-[5px] text-[14px] font-[600]'>magazin1-magazin2</span>
                                <span onClick={()=>{card(e)}} className='text-[#fff]'> <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg></span>
                            </div>
                            <div className='bg-[#00000061] hover:bg-[#fefefe] hover:text-[#000]'>
                                <p className='text-[#fff] hover:text-[#000] text-[20px] p-3'>{e.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <ToastContainer/>
            </div>
        </>
    );
}

export default Home;
