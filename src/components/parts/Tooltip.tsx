import React, { useState } from "react";

const Tooltip: React.FC<{ text: string; children: React.ReactNode }> = ({
  text,
  children,
}) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
      <div
        className={`tooltip mt-2 fixed bg-lightpurple text-darkpurple px-3 py-2 rounded-md text-sm ${
          show ? "shown" : ""
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
