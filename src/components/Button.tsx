import type { ReactElement } from "react";

interface Button{
    variant:"primary"|"secondary";
    text:string;
    startIcon: ReactElement,
    onClick:()=>void;
}

const variantclass={
    primary:"bg-[#5046e5] text-[#e3e1fb]",
    secondary:"bg-[#e0e7ff] text-[#e0e7ff]"
}
const defaultStyle="px-4 py-2 flex items-center rounded-md font-bold cursor-pointer"
function Button(props:Button) {
  return (
    <button className={variantclass[props.variant]+" "+defaultStyle}
    onClick={props.onClick}
    >
        <div className="pr-2">{props.startIcon}</div>
        {props.text}
    </button>
  )
}

export default Button