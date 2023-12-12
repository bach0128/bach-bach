"use client";
import { useRouter } from "next/navigation";
export default function Package() {
  const route = useRouter();
  return (
    <section
      id="package"
      className="p-3 flex flex-col items-center justify-center"
    >
      <h1 className="text-yellow-500 text-6xl text-center">CHO BẠN</h1>
      <p className="text-center">
        Xúc tour đi Egypt để trải nhiệm cái nóng của sa mạc ngay và luôn{" "}
      </p>
      <button
        onClick={() => route.push("/pages/detail")}
        className="p-3 px-6 text-white border border-transparent bg-yellow-500 hover:bg-yellow-300 hover:text-yellow-700"
      >
        Đặt ngay
      </button>
    </section>
  );
}
