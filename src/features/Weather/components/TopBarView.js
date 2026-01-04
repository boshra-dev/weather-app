import { IoMoon, IoSearch } from "react-icons/io5";
import logo from "../../../assets/images/home/qqq.png";

export default function TopBarView({
  placeholder,
  inputRef,
  city,
  onInputChange,
  handleButtonClick,
  suggestionShow,
  suggestion,
  handleSuggestionClick,
}) {
  return (
    <div className="topBar-container">
      <img alt="" src={logo} loading="eager"></img>

      <div
        className={`${
          placeholder === "Write city name" ? "red-border" : ""
        } search-container`}
      >
        <input
          type="text"
          placeholder={placeholder}
          id="search-input"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          ref={inputRef}
          value={city}
          onChange={onInputChange}
        />
        <button
          aria-label="Search"
          className="search-icon"
          onClick={handleButtonClick}
        >
          search
          <IoSearch className="search-input-icon" htmlFor="search-input" />
        </button>
      </div>

      {suggestionShow && (
        <ul
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            width: "100%",
            borderRadius: "8px",
            backgroundColor: "white",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          {suggestion?.map((sug, ind) => (
            <li
              onClick={() => handleSuggestionClick(sug)}
              key={ind}
              style={{
                listStyleType: "none",
                padding: "10px",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              {sug.formatted}
            </li>
          ))}
        </ul>
      )}
      <IoMoon className="sun-icon" />
    </div>
  );
}
