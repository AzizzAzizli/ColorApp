import React from "react";
import { ColorCard } from "../colors";

export const ColorPalet = ({paletArray ,onClick}) => {

    // console.log(paletArray);
    return <div className=" d-flex flex-wrap gap-3 p-3">
        {paletArray.map((color, index) => <ColorCard onClick={()=>onClick(color.colorcode)} key={index+color.colorcode} {...color} /> )}
        </div>;
};
