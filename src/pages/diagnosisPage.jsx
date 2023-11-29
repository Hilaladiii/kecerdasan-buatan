import React, { useState } from "react";
import CardQuestion from "../components/CardQuestion";
import {useNavigate} from 'react-router-dom'
import axios from "axios";

const DiagnosisPage = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [diagnosisResult, setDiagnosisResult] = useState({});
  const [show, setShow] = useState(false);

  const questions = [
    "Apakah daun terlihat pucat?",
    "Apakah daun terlihat layu?",
    "Apakah daun menguning?",
    "Apakah daun bewarna coklat gelap / hitam?",
    "Apakah terdapat lesi tengah daun bewarna hitam?",
    "Apakah daun memiliki bercak yang meluas?",
    "Apakah daun terlihat melengkung(ke atas/ke bawah)?",
    "Apakah tulang daun bengkok?",
    "Apakah tulang daun menebal",
    "Apakah daun memiliki mosaik (terang gelap bergantian)?",
    "Apakah daun menggulung / keriting?",
    "Apakah daun kering?",
    "Apakah daun memiliki berbintik gelap",
    "Apakah daun rontok/ berjatuhan?",
    "Apakah daun berbentuk lebih kecil dari ukuran normal?",
    "Apakah daun berjamur (seperti benang tipis)?",
    "Apakah batang terlihat berlekuk?",
    "Apakah beberapa batang membusuk?",
    "Apakah batang menggelap (kecoklatan / menguning)?",
    "Apakah batang memiliki lesi yang bewarna gelap?",
    "Apakah batang terlihat membesar / membengkak?",
    "Apakah batang memiliki jamur yang bewarna putih?",
    "Apakah batang memiliki jamur yang bewarna gelap?",
    "Apakah batang memiliki pola mosaik?",
    "Apakah batang cenderung lemah / rapuh?",
    "Apakah batang mengeluarkan lendir / berlendir?",
    "Apakah batang terlihat pucat?",
    "Apakah batang terlihat kerdil?",
  ];

  const handleNext = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestionIndex < questions.length -1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log(answers)
      axios.post("https://6fea-104-28-215-132.ngrok-free.app/get",{'value' : answers})
     .then((res)=>{      
      console.log(res)
      setDiagnosisResult(res.data)      
     }).catch((err)=>{
      console.log(err)
     })
     setShow(true)
    }
  };

  const testAPI=() => {
    axios.post("https://6fea-104-28-215-132.ngrok-free.app/get",{'Value' : [0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]})
    .then((res)=>{      
     setDiagnosisResult(res.data)
     console.log(answers)
     console.log(diagnosisResult) 
     console.log(res)    
    }).catch((err)=>{
     console.log(err)
    })
    setShow(true) 
  }
  
  return (
    <div className="mx-auto w-full">
        <div className="w-full h-screen bg-[url('/images/bg-tobadoc-fix.png')] bg-top bg-cover bg-no-repeat justify-center items-center ">
          <div className="w-52 h-32 bg-[url('/images/logo-tobadoc.png')] bg-center justify-center bg-contain"/>
          {show ? (                           
            <div className="w-full flex flex-col justify-center items-center bg-black bg-opacity-70 rounded-lg p-2 gap-7">
              <h1 className="font-semibold text-2xl text-white">Hasil Diagnosis</h1>
              <div className="w-full flex flex-row justify-center items-center gap-[15em]">
                <div className="ml-16 flex flex-col justify-center gap-5 ">
                    <div className="flex flex-col gap-2">
                      <h1 className="max-w-[10em] text-white bg-[#99CF014D] rounded-md p-2">Indikasi Penyakit</h1>
                      <span className="text-2xl text-white font-semibold">{diagnosisResult.nama}</span>
                    </div>
                    <div className="flex flex-col gap-2 ">
                      <h1 className="max-w-[10em] text-white bg-[#99CF014D] rounded-md p-2">Indikasi Gejala</h1>                                            
                      {
                        diagnosisResult?.gejala && diagnosisResult.gejala.map((data, index) => (
                          <ul className="text-white text-sm" key={index}>{data}</ul>
                        ))
                      }
                   </div>
               </div>

               <div className="flex flex-col justify-center gap-5 ">
                    <div className="flex flex-col gap-2 ">
                      <h1 className="max-w-[11em] text-white bg-[#99CF014D] rounded-md p-2">Cara Penanganan</h1>
                      {
                        diagnosisResult?.penanganan && diagnosisResult.penanganan.map((data, index) => (
                          <ul className="text-white text-sm" key={index}>{data}</ul>
                        ))
                      }                      
                    </div>
                    <div className="flex flex-col gap-2 ">
                      <h1 className="max-w-[15em] text-white bg-[#99CF014D] rounded-md p-2">Halaman Informasi Terkait</h1>                      
                      {
                        diagnosisResult?.link && diagnosisResult.link.map((data, index) => (
                          <a href={`${data.link}`} className="text-white text-xs underline" key={index}>{data.link || "tidak ada informasi"}</a>
                        ))
                      }                     
                   </div>
               </div>
              </div>              
              <button className="mx-auto px-5 py-2 bg-[#99CF014D] rounded-md text-white mt-3" onClick={() => navigate("/")}>Kembali</button>
            </div>
          ) : (
            <div className="mt-16">
                <CardQuestion
                question={questions[currentQuestionIndex]}
                onNext={handleNext}
              />
              {/* <button className="mx-auto px-5 py-2 bg-[#99CF014D] rounded-md text-white mt-3" onClick={() =>testAPI()}>tes api</button> */}
            </div>
          )}
        </div>
      
    </div>
  );
};

export default DiagnosisPage;