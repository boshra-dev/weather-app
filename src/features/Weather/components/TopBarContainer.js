import useTopBarLogic from "../hooks/useTopBarLogic";
import TopBarView from "./TopBarView";
export default function TopBarContainer({ onSearch }) {
  const {
    placeholder,
    inputRef,
    city,
    onInputChange,
    handleButtonClick,
    suggestionShow,
    suggestion,
    handleSuggestionClick,
  } = useTopBarLogic({ onSearch });

  return (
    <TopBarView
      placeholder={placeholder}
      inputRef={inputRef}
      onInputChange={onInputChange}
      handleButtonClick={handleButtonClick}
      suggestionShow={suggestionShow}
      suggestion={suggestion}
      handleSuggestionClick={handleSuggestionClick}
      city={city}
    />
  );
}
