import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const nav = useNavigate();
  return (
    <div className="page-not-found">
      <div className="container">
        <div className="error">
          <p className="p">4</p>
          <span className="dracula">
            <div className="con">
              <div className="hair"></div>
              <div className="hair-r"></div>
              <div className="head"></div>
              <div className="eye"></div>
              <div className="eye eye-r"></div>
              <div className="mouth"></div>
              <div className="blod"></div>
              <div className="blod blod2"></div>
            </div>
          </span>
          <p className="p">4</p>

          <div className="page-ms">
            <p className="page-msg">
              {" "}
              Oops, the page you're looking for Disappeared{" "}
            </p>
            <button className="go-back" onClick={() => nav("/")}>
              Go Back
            </button>
          </div>
        </div>
      </div>

      <div
        style={{ width: "0", height: "0", border: "0", border: "none" }}
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://instaud.io/_/2Vvu.mp3"
      ></div>
    </div>
  );
}
