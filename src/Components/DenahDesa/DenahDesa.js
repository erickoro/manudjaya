import React, { useState } from "react";
import "./DenahDesa.css";

import { peta, peta2 } from "../../Assets/Image/index";

export default function DenahDesa() {
  const [isCardExpanded, setCardExpanded] = useState(false);

  const toggleCardSize = () => {
    setCardExpanded(!isCardExpanded);
  };

  const cardClass = `denah-card ${isCardExpanded ? "expanded" : ""}`;

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
        <h1>Denah Desa</h1>
        <hr
          style={{
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        />
      </div>
      <div className="denah-container">
        <div className={cardClass} onClick={toggleCardSize}>
          <img src={peta2} alt="Denah Desa Manud Jaya" />
          <div className="denah-details">
            <h2>Denah Desa</h2>
            <p>
              Ini adalah denah desa Manud Jaya yang menampilkan semua lokasi
              penting dalam desa.
            </p>
          </div>
        </div>
        <div className={cardClass} onClick={toggleCardSize}>
          <img src={peta} alt="Denah Aktivitas Manud Jaya" />
          <div className="aktivitas-details">
            <h2>Denah Aktivitas</h2>
            <p>
              Ini adalah denah aktivitas di Manud Jaya yang mencakup
              tempat-tempat rekreasi, tempat makan, dan lokasi kegiatan penting.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
