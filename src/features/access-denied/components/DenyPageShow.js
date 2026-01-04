import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import cloudImg from "../../../../src/assets/images/Deny/cloud-Photoroom.png";
import Header from "../../../shared/components/header/Header";
import Spinner from "../../../shared/components/spinner/Spinner";

export default function DenyPageShow({

  cityName,
  storeCityName,
  modalShow,
  modalToggle,
setSearchTrigger
}) {
    const [loading, setLoading] = useState(false);

    const [warningKey, setWarningKey] = useState(0);
   const navigate = useNavigate()
  const inputRef = useRef(null);
function handleSearch (){
   if (!cityName.trim()) {
    
        setWarningKey(pre => pre + 1)
        return;
      }

      else{
          setLoading(true)
          setSearchTrigger({type:"MANUAL",payload:{city:cityName}})

          navigate("/weatherPage")

      }


}
  useEffect(() => {
    if(!modalShow) setWarningKey(0)
    if (modalShow && inputRef.current) {
      inputRef.current.focus();
    }
  }, [modalShow]);

  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;

    if (warningKey > 0  && !document.activeElement.isSameNode(el)) {
      el.classList.remove("shake", "emptyField");
      void el.offsetWidth;
      el.classList.add("shake", "emptyField");
    }

    const handleInput = () => {
      if (el.value.trim()) {
        el.classList.remove("emptyField");
      }
    };

    const handleFocus = () => el.classList.remove("emptyField");

    el.addEventListener("input", handleInput);
    el.addEventListener("focus", handleFocus);

    return () => {
      el.removeEventListener("input", handleInput);
      el.removeEventListener("focus", handleFocus);
    };
  }, [warningKey]);

  return (
    <div className="denyPage-container" onClick={() => modalToggle(false)}>
      <div className="deny-card-container" onClick={(e)=>e.stopPropagation()}>
        <Header />
        <div className="deny-card-body">
          <div className="title">We were unable to determine your location</div>
          <p>
            Location access is denied. Please enter your city manually to get
            the current weather forecast
          </p>
          <img width="200px" alt="Cloud illustration" src={cloudImg} loading="eager"></img>
          <div className="deny-button-container">
            <button onClick={() => modalToggle(true)}>Enter City</button>
            <Link to="/">
              <button>Try Again</button>
            </Link>
          </div>
        </div>
      </div>

      <div className={`modal-container ${modalShow ? "slide-down" : ""}`}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-title">Enter city name</div>
          <p className="modal-desc">
            Location access is denied.Please enter your city manually to get the
            current weather forecast
          </p>
          <input
            type="text"
            ref={inputRef}
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            placeholder="City name"
            onChange={(e) => storeCityName(e.target.value)}
            value={cityName}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch()
              }
            }}
          />
          { cityName === "" && warningKey>0 && (
            <div className="city-error" key={warningKey}>City name is required</div>
          )}
          <button
            className="search-btn"
            onClick={   handleSearch
}
            disabled={loading}
          >
            {!loading && "Search"}
            <Spinner loading={loading} />
          </button>
        </div>
      </div>
    </div>
  );
}
