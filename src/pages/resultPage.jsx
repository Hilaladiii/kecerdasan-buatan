

const ResultPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-black bg-opacity-70 rounded-lg p-2 gap-7">
    <h1 className="font-semibold text-2xl text-white">Hasil Diagnosis</h1>
    <div className="w-full flex flex-row justify-center items-center gap-[15em]">
      <div className="ml-16 flex flex-col justify-center gap-5 ">
          <div className="flex flex-col gap-2">
            <h1 className="max-w-[10em] text-white bg-[#99CF014D] rounded-md p-2">Indikasi Penyakit</h1>
            <span className="text-2xl text-white font-semibold">{diagnosisResult?.nama}</span>
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
                <ul className="text-white" key={index}>{data || "tidak ada informasi"}</ul>
              ))
            }                     
         </div>
     </div>
    </div>              
    <button className="mx-auto px-5 py-2 bg-[#99CF014D] rounded-md text-white mt-3" onClick={() => navigate("/")}>Kembali</button>
  </div>
  )
}

export default ResultPage