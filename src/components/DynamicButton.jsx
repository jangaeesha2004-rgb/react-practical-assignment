import { useState } from "react";

function DynamicButton() {
  const [isBlue, setIsBlue] = useState(false);

  const changeColor = () => {
    setIsBlue(!isBlue);
  };

  return (
    <button
      onClick={changeColor}
      style={{
        backgroundColor: isBlue ? "blue" : "orange",
        color: "white",
        padding: "12px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Click Me
    </button>
  );
}

export default DynamicButton;