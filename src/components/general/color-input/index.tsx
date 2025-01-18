import { useState } from "react";
import "./style.scss";

export default function ColorInput(props: any) {
  const [bg, setBg] = useState("#000000");

  const handleChange = (event: any) => {
    props.onChange(event);
    setBg(event.target.value);
  };

  return (
    <div className="color-input" style={{ background: bg }}>
      <input {...props} type="color" onChange={handleChange} />
    </div>
  );
}
