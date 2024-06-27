import { useState } from "react";
import Button from "./Button";

export default function Calculator() {
  const [display, setDisplay] = useState("");

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "Clear",
  ];

  const handleClick = (vlaue) => {
    if (vlaue === "=") {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay("Error");
      }
    } else if (vlaue === "Clear") {
      setDisplay("");
    } else {
      setDisplay(display + vlaue);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        {buttons.map((button, i) => (
          <Button key={i} label={button} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}
