import React from "react";

type ButtonProps = {
  element?: "button" | "a",
  onClick: () => void,
  href?: string,
  children : JSX.Element | string,
  className?: string,
  type?: "button" | "submit" | "reset",
  buttonStyle?: "normal" | 'outline',
};

export default function Button({
  element = "button",
  onClick = () => {},
  href,
  children,
  className = "",
  type = "button",
  buttonStyle = "normal",
}: ButtonProps) {

  let style = `bg-primary-600 hover:bg-primary-800 transition-colors text-white rounded-md px-8 py-4 font-bold font-satoshi ${className}`;

  if (buttonStyle === 'outline') {
    style += ' border border-2 border-primary-600 bg-transparent hover:bg-primary-600 hover:text-white';
  }


  if (element === "button") {
  return (
    <button
      type={type}
      onClick={onClick}
      className={style}
    >
      {children}
    </button>
  )
  } else {
    return (
      <a
        href={href}
        target="_blank"
        className={style}
      >
        {children}
      </a>
    )
  }
}
