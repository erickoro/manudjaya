import React from "react";

import { FotoBos } from "../../Assets/Image";

const modal = {
  position: "fixed",
  zIndex: 1,
  left: 0,
  top: 0,
  width: "100vw",
  height: "100vh",
  overflow: "auto",
  backgroundColor: "rgba(0, 0, 0, 0.8)"
};

const close = {
  marginTop: '200px',
  position: "absolute",
  top: 15,
  right: 35,
  color: "#f1f1f1",
  fontSize: 40,
  fontWeight: "bold",
  cursor: "pointer"
};

const itemLeft = {
  flex: "50%",
  height: "100%",
  borderTopLeftRadius: 20,
  borderBottomLeftRadius: 20
};

const itemRight = {
  backgroundColor: "white",
  padding: "10px",
  opacity: 0.7,
  flex: "50%",
  height: "100%",
  borderTopRightRadius: 20,
  borderBottomRightRadius: 20
};

const modalContent = {
  display: "flex",
  flexDirection: "row",
  marginTop: "250px",
  marginBottom: "50px",
  marginLeft: "100px",
  marginRight: "100px",
  alignItems: "center",
  justifyContent: "center",
  height: "50%",
  width: "100%%"
};

export const Modal = ({ onOpen, children }) => {
  return <div onClick={onOpen}> {children}</div>;
};

export const ModalContent = ({ onClose }) => {
  return (
    <div style={modal}>
      <span style={close} onClick={onClose}>
        &times;
      </span>
      <div style={modalContent}>
        <div style={itemLeft}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%"
            }}
          >
            <img src={FotoBos} style={{ width: "100%", height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
        <div style={itemRight}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              flexDirection: 'column'
            }}
          >
            <h1>HALO!</h1>
            <table >
              <thead >
                <tr>
                  <th>1</th>
                  <th>2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>4</td>
                  <td>5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};