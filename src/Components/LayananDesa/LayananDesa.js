import React, { useState, useEffect } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import swal from "sweetalert";
import { animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";

import { API_URL } from "../../Constants/Api";
import "./LayananDesa.css";
import Swal from "sweetalert2";
import { Surat } from "../../Assets/Surat";

const LayananDesa = ({ user }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: user.email,
    nik: "",
    alamat: "",
    jenisSurat: "Surat Keterangan Domisili",
    keperluan: "",
    statusSurat: "kepalaRT",
  });
  const [formDownload, setFormDownload] = useState({
    noKtp: "",
    email: "",
  });
  const [activeSection, setActiveSection] = useState(null);
  const openSection = (section) => {
    setActiveSection(section === activeSection ? null : section);
  };
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.role === "") {
      return swal({
        title: "Login untuk melakukan pengajuan layanan desa",
        title: "Silahkan login terlebih dahulu . . .",
        icon: "error",
        button: "OK !",
      });
    }
    setLoading(true);
    try {
      const res = await Axios.post(`${API_URL}/requestSurat`, formData);

      setFormData({
        fullName: "",
        email: user.email,
        nik: "",
        alamat: "",
        jenisSurat: "Surat Keterangan Domisili",
        keperluan: "",
        statusSurat: "kepalaRT",
      });
      swal({
        title: "Berhasil Pembuatan Surat",
        title: "Pengajuan surat Berhasil",
        icon: "success",
        button: "OK !",
      });
      navigate("/");
      scroll.scrollToTop({
        duration: 100, // Durasi animasi dalam milidetik
        smooth: "easeInOutQuart", // Efek easing (percepatan/perlambatan)
      });
    } catch (err) {
      swal({
        title: "Ooopps !",
        text: "Gagal",
        icon: "error",
        button: "OK !",
      });
    } finally {
      setLoading(false);
    }
  };

  const [suratList, setSuratList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSuratList = () => {
    Axios.get(`${API_URL}/suratByStatus/${user.role}`)
      .then((response) => {
        setSuratList(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchSuratList();
  }, [user.role]);

  const approveSurat = async (id) => {
    const approvalName = user.fullName;

    setIsLoading(true);

    try {
      await Axios.put(`${API_URL}/approveSurat/${user.role}`, {
        suratId: id,
        approvalName: approvalName,
      });

      swal({
        title: "Surat telah disetujui.",
        icon: "success",
        button: "OK !",
      });

      if (suratList.length === 1) setSuratList([]);
      else fetchSuratList();
    } catch (error) {
      swal({
        title: "Ooopps !",
        text: "Gagal !",
        icon: "error",
        button: "OK !",
      });

      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const declineSurat = async (id) => {
    const approvalName = user.fullName;
    const role = user.role;

    setIsLoading(true);

    try {
      await Axios.put(`${API_URL}/declineSurat`, {
        id: id,
        role,
        approvalName,
      });

      swal({
        title: "Surat telah ditolak.",
        icon: "success",
        button: "OK !",
      });

      if (suratList.length === 1) setSuratList([]);
      else fetchSuratList();
    } catch (error) {
      swal({
        title: "Ooopps !",
        text: "Gagal !",
        icon: "error",
        button: "OK !",
      });

      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="layanan-desa-section">
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <h4
          style={{ flex: 1 }}
          className={`menu-item ${activeSection === "request" ? "active" : ""}`}
          onClick={() => openSection("request")}
        >
          {user.role === "user" ? "Form Request Surat" : "Approval Surat"}
        </h4>
        {user.role === "user" && (
          <h4
            style={{ flex: 1 }}
            className={`menu-item ${
              activeSection === "download" ? "active" : ""
            }`}
            onClick={() => openSection("download")}
          >
            Download Surat
          </h4>
        )}
      </div>
      <hr />
      <br />
      {activeSection === "request" && user.role === "user" && (
        <form onSubmit={handleSubmit} className="layanan-desa-form">
          <div className="form-group">
            <label htmlFor="fullName">Nama</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          {user.role !== "" && (
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                disabled
                // onChange={handleChange}
                required
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="nik">No. KTP</label>
            <input
              type="text"
              id="nik"
              name="nik"
              value={formData.nik}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="alamat">Alamat</label>
            <textarea
              id="alamat"
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="jenisSurat">Jenis Layanan Dokumen</label>
            <select
              id="jenisSurat"
              name="jenisSurat"
              value={formData.jenisSurat}
              onChange={handleChange}
              required
            >
              <option value="Surat Keterangan Domisili">
                Surat Keterangan Domisili
              </option>
              <option value="Surat Keterangan Kelahiran">
                Surat Keterangan Kelahiran
              </option>
              <option value="Surat Keterangan Usaha">
                Surat Keterangan Usaha
              </option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="keperluan">Detail Kebutuhan</label>
            <textarea
              id="keperluan"
              name="keperluan"
              value={formData.keperluan}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      )}
      {activeSection === "request" && user.role !== "user" && (
        <section>
          <table className="surat-table">
            <thead>
              <tr>
                <th>Nomor Surat</th>
                <th>Pengirim</th>
                <th>Jenis Surat</th>
                <th>Alamat</th>
                <th>Keperluan</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {suratList.map((surat, idx) => (
                <tr key={surat._id}>
                  <td>{idx + 1}.</td>
                  <td>{surat.fullName}</td>
                  <td>{surat.jenisSurat}</td>
                  <td>{surat.alamat}</td>
                  <td>{surat.keperluan}</td>
                  <td>
                    <button
                      className="approve-button"
                      onClick={() => approveSurat(surat._id)}
                      disabled={isLoading}
                    >
                      {isLoading ? "Loading..." : "Approve"}
                    </button>
                    <button
                      className="decline-button"
                      onClick={() => declineSurat(surat._id)}
                      disabled={isLoading}
                    >
                      {isLoading ? "Loading..." : "Decline"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
      {activeSection === "download" && (
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <div style={{ flex: 1 }}>
              <div className="form-group">
                <label htmlFor="noKtp">No. KTP</label>
                <input
                  type="text"
                  id="noKtp"
                  name="noKtp"
                  value={formDownload.noKtp}
                  onChange={(e) => {
                    const { name, value } = e.target;
                    setFormDownload({ ...formData, [name]: value });
                  }}
                  required
                />
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formDownload.email}
                  onChange={(e) => {
                    const { name, value } = e.target;
                    setFormDownload({ ...formDownload, [name]: value });
                  }}
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <a
              href={formDownload.email && formDownload.noKtp ? Surat : null} // Ganti dengan URL atau path yang sesuai dengan dokumen yang ingin Anda unduh
              download={
                formDownload.email && formDownload.noKtp ? `Surat.pdf` : null
              } // Nama file yang akan diunduh
              target="_blank"
            >
              <button
                className="submit-button"
                onClick={() => {
                  if (user.role === "") {
                    return swal({
                      title: "Login untuk melakukan pengajuan layanan desa",
                      title: "Silahkan login terlebih dahulu . . .",
                      icon: "error",
                      button: "OK !",
                    });
                  } else {
                    if (formDownload.email && formDownload.noKtp) {
                      Swal.fire("Sukses", "Dokumen telah diunduh.", "success");
                      setFormData({
                        noKtp: "",
                        email: "",
                      });
                    } else {
                      Swal.fire(
                        "Gagal",
                        "Lengkapi data yang diperlukan",
                        "error"
                      );
                    }
                  }
                }}
              >
                Download
              </button>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(LayananDesa);
