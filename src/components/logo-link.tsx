"use client";

import Link from "next/link";
import { FaSquareShareNodes } from "react-icons/fa6";

const LogoLink = () => {
  return (
    <Link href="/" className="flex items-center justify-center space-x-2">
      <FaSquareShareNodes className="size-6" />
      <span className="font-[700] text-[16px]">Share Project</span>
    </Link>
  );
};

export default LogoLink;
