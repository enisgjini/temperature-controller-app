import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

const App = () => {
  const [vleraETemperatures, caktovleraETemperatures] = useState(10);
  const [ngjyra, caktoNgjyren] = useState("cold");
  const notify = () => toast.error("Kujdes! Temperaturë e lartë ");

  const increaseTemperature = () => {
    if (vleraETemperatures === 30) return;

    const newTemperature = vleraETemperatures + 1;

    caktovleraETemperatures(newTemperature);
    if (newTemperature >= 15) {
      caktoNgjyren("hot");
      notify();
    }
  };

  const decreaseTemperature = () => {
    if (vleraETemperatures === 0) return;

    const newTemperature = vleraETemperatures - 1;
    caktovleraETemperatures(newTemperature);
    if (newTemperature < 20) {
      caktoNgjyren("cold");
    }
  };

  return (
    <>
      <div className={`app-container ${ngjyra}`}>
        <div className="temperature-display-container">
          <div className={`temperature-display`}>{vleraETemperatures}°C</div>
        </div>
      </div>
      <br />
      <div className="button-container">
        <button
          onMouseDown={increaseTemperature}
          aria-label="Inkrementimi i temperatures"
        >
          <img
            src="https://img.icons8.com/fluency/48/000000/summer.png"
            alt="Summer Icon"
          />
        </button>
        <button
          onClick={decreaseTemperature}
          aria-label="Dekrementimi i temperatures"
        >
          <img
            src="https://img.icons8.com/fluency/48/000000/winter.png"
            alt="Winter Icon"
          />
        </button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          limit={1}
        />
      </div>
    </>
  );
};

export default App;
