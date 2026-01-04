import noConnectionImg from "../../../assets/images/errors/2406247-Photoroom.png";
import accessDeniedImg from "../../../assets/images/errors/photo_2025-10-15_11-20-21-Photoroom.png";
import timeOutImg from "../../../assets/images/errors/408-error-Photoroom.png";
import unKnownErrorImg from "../../../assets/images/errors/unKnown-error-Photoroom.png";
import homeImg from "../../../assets/images/home/s-Photoroom.png";
import Spinner from "../../../shared/components/spinner/Spinner";
import Header from "../../../shared/components/header/Header";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function LocationStatusView({
  errorCode,
  getPosition,
  resetError,
  loading,
}) {
  const hasError = Boolean(errorCode.code);
  const [visibleSrc, setVisibleSrc] = useState(homeImg);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let newSrc;

    switch (errorCode.code) {
      case "NETWORK_ERROR":
        newSrc = noConnectionImg;
        break;

      case "ACCESS_DENIED":
        newSrc = accessDeniedImg;
        break;

      case "TIME_OUT":
        newSrc = timeOutImg;
        break;

      case "UNKNOWN_ERROR":
        newSrc = unKnownErrorImg;
        break;

      default:
        newSrc = homeImg;
    }
    const img = new Image();
    img.src = newSrc;

    img.onload = () => {
      setVisibleSrc(newSrc);
      setIsLoaded(true);
    };
    setIsLoaded(false);
  }, [errorCode]);
  return (
    <div className="home-container">
      <div className="card-container">
        <Header />

        <div className="content-container">
          <img style={{ opacity: isLoaded ? "1" : "0" }} src={visibleSrc}></img>
          <div className="question-container">
            {errorCode.msg ? (
              <div>{errorCode.msg}</div>
            ) : (
              <div>Allow Weather App to Access your location?</div>
            )}
            {errorCode.desc ? (
              <p>{errorCode.desc}</p>
            ) : (
              <p>This will provide accurate local weather forecasts</p>
            )}
          </div>
          <div className="buttons-container">
            {hasError ? (
              <button onClick={resetError}>Try Again</button>
            ) : (
              <>
                <button
                  className="allow-btn"
                  onClick={getPosition}
                  disabled={loading}
                >
                  {!loading && "Allow"}
                  <Spinner loading={loading} />
                </button>

                <Link to="/denyPage">
                  <button disabled={loading}>Deny</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
