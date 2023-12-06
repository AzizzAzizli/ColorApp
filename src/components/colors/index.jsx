import React from "react";

export const ColorCard = ({colorcode,colorname, onClick}) => {
  return (
    <>
      <div onClick={onClick}
        className=" p-2 text-info rounded-4"
        style={{
          background: `#${colorcode}`,
          height: "100px",
            width: "100px",
          cursor: "pointer",
        }}
          >{ colorname}</div>
    </>
  );
};
