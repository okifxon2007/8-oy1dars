import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { incrument } from "../redux/Card";
import { toast } from "react-toastify";

function Input() {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [chegirma, setChegirma] = useState("");
  const [narh, setNarh] = useState("");
  const [Brand, setBrand] = useState("");
  const [categori, setCategori] = useState("");
  const [text, setText] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const cardItems = useSelector((state) => state.counter);
  const dispach = useDispatch();
  console.log(cardItems);
  const validateForm = () => {
    const errors = {};
    if (!name.trim()) errors.name = "Maxsulot nomi!";
    if (!img.trim()) errors.img = "Rasm !";
    if (!narh.trim()) errors.narh = "Qisimni kiriting!";
    if (!chegirma.trim()) errors.chegirma = "Qancha maxsulot!";
    if (!Brand.trim()) errors.Brand = "Yilini kiriting!";
    if (!categori) errors.categori = "Kategoriyani tanlang!";
    if (!text.trim()) errors.text = "maxsulot haqida malumot!";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const data = {
      id: Date.now(),
      img:img,
      name:name,
      episodeCount:narh,
      releasedEpisodes:chegirma,
      year: Brand,
      categori,
      text,
    };
    toast.success("Mofaqiyatli maxsulot card yaratinggiz!");
    dispach(incrument(data));
    navigate("/");
  };

  const handleClear = () => {
    setName("");
    setImg("");
    setChegirma("");
    setNarh("");
    setBrand("");
    setCategori("");
    setText("");
    setErrors({});
  };

  return (
    <div className=" div-2 py-20">
      <div className=" flex flex-col gap-[4vh] items-center justify-center">
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundPositionY: "100%",
          }}
          className="w-[316px] h-[450px] flex flex-col justify-between"
        >
          <div className="flex justify-between items-center rounded-[10px] p-1">
            <span className="bg-[#f29824] text-white py-1 px-2 rounded-[5px] text-[14px] font-[600]">
              {Brand}
            </span>
            <span className="bg-[#0303032d] text-white py-1 px-2 rounded-[5px] text-[14px] font-[600]">
            {narh}-{chegirma}
            </span>
            <span
              onClick={() => {
                card(e);
              }}
              className="text-[#fff]"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </span>
          </div>
          <div className="bg-[#00000061] hover:bg-[#fefefe] hover:text-[#000]">
            <p className="text-[#fff] hover:text-[#000] text-[20px] p-3">
              {name}
            </p>
          </div>
        </div>
        <div className="flex gap-10">
          <button
            onClick={handleClear}
            className="bg-[#fff] w-32 h-10 rounded-[2px]"
          >
            Tozalash
          </button>
          <button
            onClick={handleSubmit}
            className="bg-[#1e02f7] text-white w-32 h-10 rounded-[2px]"
          >
            Tayor
          </button>
        </div>
      </div>
      <div className="  flex items-center justify-center">
        <div className="bg-[#fff] w-[70%] border-[1px] border-[#000]  rounded-[5px] p-[30px]">
          <h2 className="font-[700] text-[23px]">magazin yaratish</h2>
          <div className="flex flex-col gap-[5px] my-auto mt-3">
            <label className="flex flex-col border-[#0901ff] border-solid border-b-[1px] font-[600]">
              magazin: Nomi
              <div className="flex justify-between items-center">
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="focus:outline-none bg-[#0000] focus:ring-0 focus:border-transparent w-[60%] h-[40px] pl-5 text-[17px]"
                  type="text"
                  placeholder="Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name}</p>
                )}
              </div>
            </label>
            <label className="flex flex-col border-[#0901ff] border-solid border-b-[1px] font-[600]">
              Anime: Rasmi
              <div className="flex justify-between items-center">
                <input
                  onChange={(e) => setImg(e.target.value)}
                  value={img}
                  className="focus:outline-none bg-[#0000] focus:ring-0 focus:border-transparent w-[60%] h-[40px] pl-5 text-[17px]"
                  type="text"
                  placeholder="Image"
                />
                {errors.img && (
                  <p className="text-red-500 text-xs">{errors.img}</p>
                )}
              </div>
            </label>
            <div className="flex justify-between">
              <div className="w-[48%]">
                <label className="flex flex-col border-[#0901ff] border-solid border-b-[1px] font-[600]">
                  Anime: Qismi
                  <input
                    onChange={(e) => setNarh(e.target.value)}
                    value={narh}
                    className="focus:outline-none bg-[#0000] focus:ring-0 focus:border-transparent w-full h-[40px] pl-5 text-[17px]"
                    type="number"
                    placeholder="Qaysi qismi"
                  />
                </label>
                {errors.narh && (
                  <p className="text-red-500 text-xs">{errors.narh}</p>
                )}
              </div>
              <div className="w-[48%]">
                <label className="flex flex-col  border-[#0901ff] border-solid border-b-[1px]  font-[600]">
                  Anime:Barcha qisimlari
                  <input
                    onChange={(e) => setChegirma(e.target.value)}
                    value={chegirma}
                    className="focus:outline-none bg-[#0000] focus:ring-0 focus:border-transparent w-full h-[40px] pl-5 text-[17px]"
                    type="number"
                    placeholder="Qancha qisim bor"
                  />
                </label>
                {errors.chegirma && (
                  <p className="text-red-500 text-xs">{errors.chegirma}</p>
                )}
              </div>
            </div>
            <label className="flex flex-col border-[#0901ff] border-solid border-b-[1px] font-[600]">
              Anime : Yili
              <div className="flex justify-between items-center">
                <input
                  onChange={(e) => setBrand(e.target.value)}
                  value={Brand}
                  className="focus:outline-none bg-[#0000] focus:ring-0 focus:border-transparent w-[60%] h-[40px] pl-5 text-[17px]"
                  type="number"
                  placeholder="Yil"
                />
                {errors.Brand && (
                  <p className="text-red-500 text-xs">{errors.Brand}</p>
                )}
              </div>
            </label>
            <label className="flex flex-col font-[600]">
              <div className="flex justify-between items-center">
                Kategoriya
                {errors.categori && (
                  <p className="text-red-500 text-xs">{errors.categori}</p>
                )}
              </div>
              <select
                onChange={(e) => setCategori(e.target.value)}
                value={categori}
                className="select select-bordered bg-[#0000] w-full border-[#0901ff] border-solid border-b-[1px]"
              >
                <option disabled value="">
                  Kategoriya tanlang
                </option>
                <option>Filimlar</option>
                <option>Kop qisimli</option>
              </select>
            </label>
            <label className="flex flex-col border-[#0901ff] border-solid border-b-[1px] font-[600]">
              <div className="flex justify-between items-center">
                Ma'lumot
                {errors.text && (
                  <p className="text-red-500 text-xs">{errors.text}</p>
                )}
              </div>
              <textarea
                onChange={(e) => setText(e.target.value)}
                value={text}
                className="border-solid bg-[#0000] border-[#1900ff] border-[1px] w-full pt-[20px] pl-[20px] h-[27vh]"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Anime haqida to'liq ma'lumot"
              ></textarea>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
