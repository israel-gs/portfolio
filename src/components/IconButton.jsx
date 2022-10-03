import React from "react";

export default function IconButton({ href, src }) {
  return (
    <a
      href={href}
      className="flex justify-center items-center p-2 rounded-full hover:bg-white/10 transition-colors w-[50px] h-[50px]"
      target="_blank"
    >
      <img src={src} alt="" srcSet="" className="" />
    </a>
  );
}
