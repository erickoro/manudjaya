import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { animateScroll as scroll } from "react-scroll";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import swal from "sweetalert";
import Cookies from "universal-cookie";

import { setUser } from "../../redux/reducers/userActions";
import { API_URL } from "../../Constants/Api";
import "./Login.css";
import { LoginIcon } from "../../Assets/Image";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Inisialisasi useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post(`${API_URL}/login/`, formData);

      const { fullName, email, role, token } = response.data;
      const cookie = new Cookies();

      setLoading(true);

      dispatch(setUser({ fullName, email, role, token }));

      swal({
        title: "Login Berhasil",
        icon: "success",
        button: "OK !",
      });

      cookie.set(
        "authData",
        JSON.stringify({ user: { fullName, email, role, token } }),
        {
          path: "/",
        }
      );
      // Navigasi ke halaman utama ("/") setelah login berhasil
      navigate("/");
      setLoading(false);
    } catch (error) {
      swal({
        title: "Ooopps !",
        text: "Gagal Loginn brooooo!",
        icon: "error",
        button: "OK !",
      });
      setLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginLeft:"300px"}}>
      <div
        style={{ width: "400px", height: "500px", backgroundColor: "white", marginTop:"200px", marginBottom:"100px", borderRadius:"10px" }}
      >
      <div style={{paddingTop:"80px",textAlign:"center"}}>
        <h1 style={{color:"black"}}>Selamat Datang</h1>
        <p>Silahkan masuk untuk melanjutkan</p>
        <img src={LoginIcon} style={{width:"300px"}} />
      </div>
      </div>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {loading ? (
            <></>
          ) : (
            <button type="submit" className="submit-button" disabled={loading}>
              Login
            </button>
          )}
        </form>
        {loading ? (
          "Loading..."
        ) : (
          <p>
            Belum punya akun?{" "}
            <Link
              onClick={() => {
                scroll.scrollToTop({
                  duration: 100, // Durasi animasi dalam milidetik
                  smooth: "easeInOutQuart", // Efek easing (percepatan/perlambatan)
                });
              }}
              to="/register"
            >
              Daftar disini
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;