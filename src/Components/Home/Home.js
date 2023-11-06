import React from "react";
import { Element, Link, animateScroll as scroll } from "react-scroll";
// import swal from "sweetalert";
import { Modal, ModalContent } from "../Modal/Modal";
import "./Home.css";
// import DestinasiCarousel from "./Carousel/Carousel";
// import BeritaScreen from "./Berita/BeritaScreen";
// import { jadwalronda } from "../../Assets/Image/index";


const Home = () => {
  const [isOpen, setIsopen] = React.useState(true);
  console.log(isOpen)
  const showModal = () => {
    setIsopen((prev) => !prev)
  };
  const daysOfWeek = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

  const dataRonda = [
    {
      petugas: "Cahyo Prima (Dusun 1 RW 02)",
    },
    {
      petugas: "Bambang Surya (Dusun 3 RW 01)",
    },
    {
      petugas: "Hartato Budi (Dusun 1 RW 01)",
    },
    {
      petugas: "Anto Kadir (Dusun 2 RW 01)",
    },
    {
      petugas: "Bagas Bina (Dusun 2 RW 02)",
    },
    {
      petugas: "Bowo Karyo n(Dusun 3 RW 02)",
    },
  ];

  const YoutubeVideo = ({ videoId }) => {
    return (
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  };


  //  popupS.window({
  //    mode: 'alert',
  //    content: "Hello World"
  //  }
  //  );

  // swal({
  //   title: "Hallo !",
  //   text: "Ini Testing",
  //   icon: "error",
  //   button: "OK !",
  // });

  return (
    <>
      {
        !isOpen ? (
          <div className="home-container">
            <div>
              <div className="hero-section" style={{ marginLeft: '400px' }}>
                <h1 className="hero-title">Selamat datang di Desa Manud Jaya</h1>
                <p className="hero-subtitle">
                  Temukan keindahan alam dan budaya kami yang luar biasa.
                </p>
                <Link
                  onClick={() => {
                    scroll.scrollToTop({
                      duration: 100, // Durasi animasi dalam milidetik
                      smooth: "easeInOutQuart", // Efek easing (percepatan/perlambatan)
                    });
                  }}
                  to="destinasi-carousel"
                  smooth={true}
                  duration={100}
                >
                  <button className="hero-button">Pelajari Lebih Lanjut</button>
                </Link>
              </div>
              <div
                style={{
                  backgroundColor: "black",
                  opacity: 0.7,
                  margin: "40px",
                  borderRadius: 36,
                  padding: "20px",
                  paddingTop: "40px",
                }}
              >
                <h1
                  style={{
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Jadwal Ronda
                </h1>
                <hr />
                <div>
                  <hr />
                  <div>
                    <table
                      style={{ color: "white", border: "black", marginTop: "50px" }}
                    >
                      <thead>
                        <tr>
                          {daysOfWeek.map((day) => (
                            <th key={day}>{day}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          {dataRonda.map((ronda, index) => (
                            <td key={index}>{`${ronda.petugas}`}</td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div
                style={{
                  margin: "60px",
                  backgroundColor: "black",
                  borderRadius: "16px",
                  padding: "30px",
                }}
              >
                <h1 style={{ color: "white", textAlign: "center" }}>
                  Video Aksi Peduli Alam
                </h1>
                <hr />
                <div style={{ marginTop: "30px" }}>
                  <YoutubeVideo videoId={"MesxaHEdMNQ?si=X717OXexZ7cCfF_6"} />
                </div>
              </div>
            </div>
          </div>
        ) : (<div style={{
          marginTop: '700px'
        }}>
          <ModalContent onClose={() => showModal()}></ModalContent>
        </div>)
      }
    </>

  );
};

export default Home;
