import React, { useState } from "react";

const CardQuestion = ({ question, onNext,diagnosis }) => {
  const [answer, setAnswer] = useState(0);

  const handleAnswer = (response) => {
    setAnswer(response);
  };
  const handleNext = () => {
    onNext(answer);
    setAnswer(null);
  };
  return (
    <div className="mx-auto w-full flex flex-col gap-4 max-w-md p-7 bg-black bg-opacity-70 rounded-lg">
      <h1 className="font-semibold text-white text-center">Identifikasi Gejala pada Tanaman :</h1>
      <span className="text-white rounded-3xl px-4 py-2 text-center">{question}</span>
      <div className="flex flex-col gap-5">
        <div className="mx-auto w-full max-w-xs flex flex-row justify-between">
            <button              
              checked={answer === 1}
              onClick={() => handleAnswer(1)}
              className="w-1/3 bg-white text-[#026700] rounded-2xl px-4 py-2 focus:bg-[#99CF01] focus:text-white focus:drop-shadow-sm"
            >
              Iya
            </button>         
          
            <button              
              checked={answer === 0}
              onClick={() => handleAnswer(0)}
              className="w-1/3 bg-white text-[#026700] rounded-2xl px-4 py-2 focus:bg-[#99CF01] focus:text-white focus:drop-shadow-sm"
            >
              Tidak
            </button>          
        </div>
        <button
          onClick={handleNext}
          className="mx-auto w-1/2 p-2 bg-white rounded-xl text-[#026700] mt-3"
        >
          Lanjutkan
        </button>
      </div>
      <span>{diagnosis}</span>
    </div>
  );
};

export default CardQuestion;