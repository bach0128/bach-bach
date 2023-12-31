"use client";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const route = useRouter();
  const { resolvedTheme, setTheme } = useTheme("light");
  const [mounted, setMounted] = useState(false);
  const [navigateBook, setNavigate] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!mounted) {
      return;
    }
    if (resolvedTheme === "dark") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, []);

  return (
    <div className="px-20 py-5 bg-neutral-700 fixed top-0 left-0 right-0 w-full flex justify-evenly z-10">
      <nav className="text-transform: capitalize text-white">
        <Link href={"/"} className="text-2xl font-bold text-white mr-40">
          <span className="text-orange-500">S</span>TRAVEL
        </Link>
        <Link
          className="hover:text-orange-400 mx-2 tracking-tighter cursor-pointer"
          href={"/"}
          onClick={() => route.push("/")}
        >
          Trang Chủ
        </Link>
        <Link
          className="hover:text-orange-400 mx-2 tracking-tighter"
          href={"/about"}
        >
          About
        </Link>
        <Link
          className="hover:text-orange-400 mx-2 tracking-tighter"
          href={"/package"}
        >
          Điểm đến
        </Link>
        <Link
          className="hover:text-orange-400 mx-2 tracking-tighter"
          href={"/services"}
        >
          Dịch vụ
        </Link>
        <Link
          className="hover:text-orange-400 mx-2 tracking-tighter"
          href={"/galley"}
        >
          Ảnh
        </Link>
        <Link
          className="hover:text-orange-400 mx-2 tracking-tighter"
          href={"/review"}
        >
          Blog
        </Link>
      </nav>
      <div className="nav-btn w-40 flex items-center justify-center">
        <Button
          className="mx-2 cursor-pointer "
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          {resolvedTheme === "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              width="20"
              viewBox="0 0 512 512"
              fill="#ffa500"
            >
              <path d="M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              width="18"
              viewBox="0 0 384 512"
              fill="#ffa500"
            >
              <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
            </svg>
          )}
        </Button>
        {!navigateBook ? (
          <button
            className="text-xl p-1 ml-2 border border-transparent rounded-xl bg-yellow-600 hover:text-yellow-500 hover:bg-neutral-600"
            onClick={() => {
              setNavigate(true);
              // route.push("/pages/bookTour");
            }}
          >
            Đặt ngay
          </button>
        ) : (
          <button
            className="text-xl p-1 ml-2 border border-transparent rounded-xl bg-yellow-600 hover:text-yellow-500 hover:bg-neutral-600"
            onClick={() => {
              setNavigate(false);
              route.push("/pages/detail");
            }}
          >
            Trở lại
          </button>
        )}
      </div>
    </div>
  );
}
