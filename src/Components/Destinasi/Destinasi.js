import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Destinasi.css";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

export default function Destinasi() {
  const destinasiWisataDesa = [
    {
      destinasi: "Pantai Nelayan",
      detail:
        "Pantai Nelayan adalah destinasi wisata yang terkenal dengan pasir putihnya dan suasana tenang. Pengunjung dapat menikmati aktivitas seperti berjemur, berenang, dan menikmati hidangan laut segar di restoran lokal.",
      imgSrc: "https://swiperjs.com/demos/images/nature-1.jpg",
    },
    {
      destinasi: "Bukit Jelita",
      detail:
        "Bukit Jelita adalah destinasi wisata yang menawarkan pemandangan indah ke seluruh desa. Wisatawan dapat mendaki bukit, menikmati matahari terbenam yang spektakuler, dan berfoto dengan latar belakang alam yang menakjubkan.",
      imgSrc: "https://swiperjs.com/demos/images/nature-2.jpg",
    },
    {
      destinasi: "Sungai Serenity",
      detail:
        "Sungai Serenity adalah destinasi yang cocok untuk penggemar alam. Wisatawan dapat menjelajahi sungai dengan perahu, memancing, dan menikmati keindahan alam sekitarnya.",
      imgSrc: "https://swiperjs.com/demos/images/nature-3.jpg",
    },
    {
      destinasi: "Desa Bahagia",
      detail:
        "Desa Bahagia adalah tempat yang dikenal dengan keramahan penduduknya. Pengunjung dapat berinteraksi dengan warga setempat, belajar tentang kehidupan desa, dan merasakan kebahagiaan sederhana.",
      imgSrc: "https://swiperjs.com/demos/images/nature-4.jpg",
    },
    {
      destinasi: "Hutan Damai",
      detail:
        "Hutan Damai adalah destinasi yang menawarkan hiking dan aktivitas luar ruangan lainnya. Pengunjung dapat menjelajahi jalur hiking yang indah, mengamati flora dan fauna yang beragam, serta merasakan kedamaian hutan.",
      imgSrc: "https://swiperjs.com/demos/images/nature-5.jpg",
    },
    {
      destinasi: "Danau Ceria",
      detail:
        "Danau Ceria adalah destinasi yang indah untuk berenang, berperahu, dan memancing. Wisatawan dapat menikmati air jernih dan pemandangan gunung yang spektakuler di sekitarnya.",
      imgSrc: "https://swiperjs.com/demos/images/nature-6.jpg",
    },
    {
      destinasi: "Kampung Kreatif",
      detail:
        "Kampung Kreatif adalah destinasi yang penuh dengan seni dan kerajinan tangan. Pengunjung dapat mengikuti workshop seni, membeli karya seni lokal, dan berpartisipasi dalam aktivitas kreatif.",
      imgSrc: "https://swiperjs.com/demos/images/nature-7.jpg",
    },
    {
      destinasi: "Pasar Tradisional",
      detail:
        "Pasar Tradisional adalah tempat yang menawarkan pengalaman berbelanja yang unik. Pengunjung dapat membeli produk-produk lokal, mencicipi makanan tradisional, dan merasakan budaya pasar tradisional.",
      imgSrc: "https://swiperjs.com/demos/images/nature-8.jpg",
    },
    {
      destinasi: "Bukit Panorama",
      detail:
        "Bukit Panorama adalah destinasi yang menawarkan pemandangan spektakuler dari ketinggian. Wisatawan dapat menikmati panorama desa dan alam sekitarnya, serta mengabadikannya dalam foto yang indah.",
      imgSrc: "https://swiperjs.com/demos/images/nature-6.jpg",
    },
    {
      destinasi: "Kebun Buah Segar",
      detail:
        "Kebun Buah Segar adalah tempat yang cocok untuk penggemar buah segar. Pengunjung dapat memetik buah-buahan langsung dari pohonnya, memasak makanan segar, dan menikmati rasa alami buah-buahan tersebut.",
      imgSrc: "https://swiperjs.com/demos/images/nature-10.jpg",
    },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "120px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Destinasi Wisata</h1>
        <hr
          style={{
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        />
      </div>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
        style={{
          width: "800px",
          height: "800px",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "100px",
        }}
      >
        {destinasiWisataDesa.map((val, idx) => (
          <SwiperSlide>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></div>
            <div
              style={{
                flex: 1,
                height: "600px",
                width: "600px",
                marginLeft: "100px",
              }}
            >
              <img src={val.imgSrc} />
            </div>
            <div
              style={{
                flex: 1,
                // height: "600px",
                width: "600px",
                marginLeft: "100px",
                textAlign: "justify",
                marginTop: "20px",
              }}
            >
              <h3>{val.destinasi}</h3>
              <p>{val.detail}</p>
            </div>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
