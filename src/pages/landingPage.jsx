import { Link, useNavigate } from "react-router-dom";

const artikel = [
  {
    judul:"TEMBAKAU SIDOGEDE SEBAGAI PRODUK UNGGULAN PERTANIAN",
    isi:"Tanaman tembakau sebagai bahan baku produksi rokok merupakan komoditi pertanian yang sangat di andalkan oleh petani di Desa Sidogede .disamping produksi tanaman bengkoang dan jenis lainnya seperti padi dan palawija .karena ditanam hampir oleh semua petani. . . . ." ,
    link:"https://sidogede.kec-prembun.kebumenkab.go.id/index.php/web/artikel/4/474"
  },
  {
    judul:"Kontribusi Besar Industri Hasil Tembakau Bagi Ekonomi Nasional",
    isi:"Industri hasil tembakau (IHT) merupakan salah satu sektor strategis domestik yang memiliki daya saing tinggi dan terus memberikan kontribusi signifikan terhadap perekonomian nasional. . . . . ." ,
    link:"https://kemenperin.go.id/artikel/17257/Kontribusi-Besar-Industri-Hasil-Tembakau-Bagi-Ekonomi-Nasional"
  },
  {
    judul:"HASIL PANEN TEMBAKAU DI KABUPATEN LAMONGAN MENINGKAT",
    isi:"Musim kemarau kali ini menjadi berkah tersendiri bagi para petani tembakau di Kabupaten Lamongan.Para petani menyambut musim panen dengan suka cita karena hasil panen tembakau kali ini meningkat, baik secara kualitas maupun harga. . . . . ." ,
    link:"https://lamongankab.go.id/beranda/dinkpp/post/12100"
  },

]
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full  flex flex-row bg-[url('/images/bg-tobadoc-fix.png')] bg-top bg-cover bg-no-repeat ">
      <div className="w-2/3 h-screen flex flex-col">
        <div className="w-52 h-32 bg-[url('/images/logo-tobadoc.png')] bg-center bg-contain"/>
        <div className="w-full max-w-xl mx-auto bg-black bg-opacity-50 px-6 py-5 mt-24 rounded-md">
          <p className="text-left text-white font-light"><strong>TOBADOC </strong>adalah sebuah website yang didedikasikan guna membantu masyarakat dan petani tembakau untuk bisa menganalisa penyakit pada tanaman tembakau yang mereka tanam, dengan memasukkan keterangan dari penyakit yang tanaman mereka derita, pengguna dapat mengetahui penyakit apa yang mungkin diderita oleh tanaman tembakau mereka, penjelasan tentang penyakit, dan penanganan yang direkomendasikan berdasarkan penyakit yang mungkin diderita.</p>
        </div>
        <p className="mx-auto text-white font-medium mt-7">Klik untuk mulai</p>
        <button className="mx-auto px-5 py-2 bg-[#99CF01] rounded-md text-white mt-3" onClick={() => navigate("/diagnosis")}>Mulai</button>
      </div>
      <div className="w-1/3 mt-12 flex flex-col gap-2 px-2">
        {
          artikel.map((data, index)=>(
            <div key={index} className="bg-black bg-opacity-50 border-2 border-white rounded-2xl px-6 py-5">
              <h1 className="text-white font-semibold text-sm">{data.judul}</h1>
              <p className="text-white font-light text-xs">{data.isi}</p>
              <a 
              href={`${data.link}`}
              className="w-full text-sm text-white mt-2 text-end hover:text-[#99CF01] ">lihat selengkapnya</a>
            </div>
          ))
        }
      </div>

     
    </div>
  )
}

export default LandingPage