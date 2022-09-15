import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";
<svg width="1000" height="600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="a" gradientTransform="rotate(90)">
      <stop offset="5%" stop-color="#3624fc" />
      <stop offset="95%" stop-color="#685afc" />
    </linearGradient>
    <linearGradient id="b" gradientTransform="rotate(90)">
      <stop offset="5%" stop-color="#4e45f9" />
      <stop offset="95%" stop-color="#7a73fa" />
    </linearGradient>
    <linearGradient id="c" gradientTransform="rotate(90)">
      <stop offset="5%" stop-color="#6765f6" />
      <stop offset="95%" stop-color="#8d8bf8" />
    </linearGradient>
    <linearGradient id="d" gradientTransform="rotate(90)">
      <stop offset="5%" stop-color="#7f86f3" />
      <stop offset="95%" stop-color="#9fa4f6" />
    </linearGradient>
    <linearGradient id="e" gradientTransform="rotate(90)">
      <stop offset="5%" stop-color="#9ba0f6" />
      <stop offset="95%" stop-color="#b4b7f8" />
    </linearGradient>
    <linearGradient id="f" gradientTransform="rotate(90)">
      <stop offset="5%" stop-color="#b7baf9" />
      <stop offset="95%" stop-color="#c9cbfa" />
    </linearGradient>
    <linearGradient id="g" gradientTransform="rotate(90)">
      <stop offset="5%" stop-color="#d3d3fc" />
      <stop offset="95%" stop-color="#dedefc" />
    </linearGradient>
    <linearGradient id="h" gradientTransform="rotate(90)">
      <stop offset="5%" stop-color="#efedff" />
      <stop offset="95%" stop-color="#f3f1ff" />
    </linearGradient>
  </defs>
  <path fill="#1d03ff" d="M0 0h1000v600H0z" />
  <path
    d="M0 66c56.363-.686 112.725-1.371 167-2 54.275-.629 106.462-1.2 161-1 54.538.2 111.426 1.172 167 4 55.574 2.828 109.834 7.51 165 9 55.166 1.49 111.237-.214 173-2 61.763-1.786 129.218-3.653 158-5 28.782-1.347 18.891-2.173 49-3l-40 534H0Z"
    fill="url(#a)"
  />
  <path
    d="M0 133c51.423-2.267 102.847-4.535 158-5 55.153-.465 114.037.87 175 3 60.963 2.13 124.007 5.051 176 7 51.993 1.949 92.936 2.924 145 0 52.064-2.924 115.248-9.749 179-10 63.752-.251 128.072 6.071 156 8 27.928 1.929 19.464-.536 51-3l-40 467H0Z"
    fill="url(#b)"
  />
  <path
    d="M0 200c51.335 1.069 102.67 2.138 161 4s123.652 4.517 179 5c55.348.483 100.72-1.205 153-3s111.467-3.698 165-8 101.413-11.004 168-8c66.587 3.004 151.882 15.716 184 19 32.118 3.284 11.059-2.858 30-9l-40 400H0Z"
    fill="url(#c)"
  />
  <path
    d="M0 266c51.096 2.734 102.191 5.469 157 6 54.809.531 113.33-1.141 174 0s123.486 5.096 179 4c55.514-1.096 103.725-7.242 157-11 53.275-3.758 111.612-5.127 176-4 64.388 1.127 134.825 4.75 162 6 27.175 1.25 11.087.125 35-1l-40 334H0Z"
    fill="url(#d)"
  />
  <path
    d="M0 333c58.907 1.952 117.813 3.904 173 3 55.187-.904 106.653-4.663 164-6 57.347-1.337 120.574-.25 174 2s97.052 5.665 149 5c51.948-.665 112.217-5.41 177-8s134.081-3.026 162-2c27.919 1.026 14.46 3.513 41 6l-40 267H0Z"
    fill="url(#e)"
  />
  <path
    d="M0 400c52.546-.993 105.092-1.986 160-1s112.178 3.95 166 4c53.822.05 104.195-2.812 165-3 60.805-.188 132.04 2.3 188 4 55.96 1.7 96.643 2.611 157 2 60.357-.611 140.388-2.746 171-4 30.612-1.254 11.806-1.627 33-2l-40 200H0Z"
    fill="url(#f)"
  />
  <path
    d="M0 466c57.316-3.602 114.632-7.203 167-9 52.368-1.797 99.787-1.79 153 0 53.213 1.79 112.22 5.36 172 9 59.78 3.64 120.333 7.347 173 7 52.667-.347 97.449-4.747 159-7s139.872-2.358 172-2c32.128.358 18.064 1.179 44 2l-40 134H0Z"
    fill="url(#g)"
  />
  <path
    d="M0 533c48.044-2.327 96.087-4.654 154-5 57.913-.346 125.694 1.29 184 4s107.137 6.497 164 7c56.863.503 121.757-2.278 174-3 52.243-.722 91.835.613 152 2 60.165 1.387 140.904 2.825 173 2 32.096-.825 15.548-3.912 39-7l-40 67H0Z"
    fill="url(#h)"
  />
</svg>;
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
