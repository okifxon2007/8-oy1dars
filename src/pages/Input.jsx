import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Input() {
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [chegirma, setChegirma] = useState('');
  const [narh, setNarh] = useState('');
  const [Brand, setBrand] = useState('');
  const [categori, setCategori] = useState('');
  const [text, setText] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    if (!name.trim()) errors.name = 'Mahsulot nomini kiriting!';
    if (!img.trim()) errors.img = 'Rasm URL ni kiriting!';
    if (!narh.trim()) errors.narh = 'Narhni kiriting!';
    if (!chegirma.trim()) errors.chegirma = 'Chegirmani kiriting!';
    if (!Brand.trim()) errors.Brand = 'Brendni kiriting!';
    if (!categori) errors.categori = 'Kategoriyani tanlang!';
    if (!text.trim()) errors.text = 'Mahsulot haqida to\'liq ma\'lumot kiriting!';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const data = {
      id: Date.now(),
      name,
      img,
      chegirma,
      narh,
      Brand,
      categori,
      text,
    };
    navigate("/");
  };

  const handleClear = () => {
    setName('');
    setImg('');
    setChegirma('');
    setNarh('');
    setBrand('');
    setCategori('');
    setText('');
    setErrors({});
  };

  return (
    <div className=" div-2 py-20">
      <div className=" flex flex-col gap-[4vh] items-center justify-center">
        <div className="bg-white w-[300px] text-[#6c6b6b] drop-shadow-2xl">
          {img && (
            <div className="w-full h-[200px]">
              <img className="w-full h-full p-1 rounded-[10px]" src={img} alt={name} />
            </div>
          )}
          <div className="p-2">
            <h3>{name}</h3>
            <p className="text-[10px]">{text}</p>
            <div className="flex justify-between text-[14px] font-[700]">
              <p>{narh}$</p>
              <p>{chegirma}$</p>
            </div>
            <button className="w-full bg-[#0d00ff] h-[30px] text-white rounded-[5px]">Sotib olish</button>
          </div>
        </div>
        <div className="flex gap-10">
          <button onClick={handleClear} className="bg-[#fff] w-32 h-10 rounded-[2px]">Tozalash</button>
          <button onClick={handleSubmit} className="bg-[#1e02f7] text-white w-32 h-10 rounded-[2px]">Tayor</button>
        </div>
      </div>
      <div className="  flex items-center justify-center">
        <div className="bg-[#fff] w-[70%] border-[1px] border-[#000]  rounded-[5px] p-[30px]">
          <h2 className="font-[700] text-[23px]">Mahsulot yaratish</h2>
          <div className="flex flex-col gap-[5px] my-auto mt-3">
            <label className="flex flex-col border-[#0901ff] border-solid border-b-[1px] font-[600]">
              Mahsulot: Nomi
              <div className="flex justify-between items-center">

              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="focus:outline-none focus:ring-0 focus:border-transparent w-[60%] h-[40px] pl-5 text-[17px]"
                type="text"
                placeholder="Name"
                />
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                </div>
            </label>
            <label className="flex flex-col border-[#0901ff] border-solid border-b-[1px] font-[600]">
              Mahsulot: Rasmi
              <div className="flex justify-between items-center">

              <input
                onChange={(e) => setImg(e.target.value)}
                value={img}
                className="focus:outline-none focus:ring-0 focus:border-transparent w-[60%] h-[40px] pl-5 text-[17px]"
                type="text"
                placeholder="Image"
                />
              {errors.img && <p className="text-red-500 text-xs">{errors.img}</p>}
                </div>
            </label>
            <div className="flex justify-between">
              <div className="w-[48%]">

              <label className="flex flex-col border-[#0901ff] border-solid border-b-[1px] font-[600]">
                Mahsulot: Narhi
                <input
                  onChange={(e) => setNarh(e.target.value)}
                  value={narh}
                  className="focus:outline-none focus:ring-0 focus:border-transparent w-full h-[40px] pl-5 text-[17px]"
                  type="text"
                  placeholder="Narh"
                />
              </label>
                {errors.narh && <p className="text-red-500 text-xs">{errors.narh}</p>}
              </div>
              <div className="w-[48%]">

              <label className="flex flex-col border-[#0901ff] border-solid border-b-[1px]  font-[600]">
                Mahsulot: Chegirmali narhi
                <input
                  onChange={(e) => setChegirma(e.target.value)}
                  value={chegirma}
                  className="focus:outline-none focus:ring-0 focus:border-transparent w-full h-[40px] pl-5 text-[17px]"
                  type="text"
                  placeholder="Chegirma"
                />
              </label>
                {errors.chegirma && <p className="text-red-500 text-xs">{errors.chegirma}</p>}
              </div>
            </div>
            <label className="flex flex-col border-[#0901ff] border-solid border-b-[1px] font-[600]">
              Brend
              <div className="flex justify-between items-center">

              <input
                onChange={(e) => setBrand(e.target.value)}
                value={Brand}
                className="focus:outline-none focus:ring-0 focus:border-transparent w-[60%] h-[40px] pl-5 text-[17px]"
                type="text"
                placeholder="Brend"
                />
              {errors.Brand && <p className="text-red-500 text-xs">{errors.Brand}</p>}
                </div>
            </label>
            <label className="flex flex-col font-[600]">
              <div className="flex justify-between items-center">
              Kategoriya

              {errors.categori && <p className="text-red-500 text-xs">{errors.categori}</p>}
              </div>
              <select
                onChange={(e) => setCategori(e.target.value)}
                value={categori}
                className="select select-bordered w-full border-[#0901ff] border-solid border-b-[1px]"
              >
                <option disabled value="">
                  Kategoriya tanlang
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </label>
            <label className="flex flex-col border-[#0901ff] border-solid border-b-[1px] font-[600]">
              <div className="flex justify-between items-center">

              Ma'lumot
              {errors.text && <p className="text-red-500 text-xs">{errors.text}</p>}
              </div>
              <textarea
                onChange={(e) => setText(e.target.value)}
                value={text}
                className="border-solid border-[#1900ff] border-[1px] w-full pt-[20px] pl-[20px] h-[27vh]"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Mahsulot haqida to'liq ma'lumot"
              ></textarea>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
