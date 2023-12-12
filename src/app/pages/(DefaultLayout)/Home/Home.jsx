import Image from "next/image";
import bannerJpg from "@/app/assets/image/banner2.jpg";
import Book from "./Book";
import Package from "./Package";
export default function Home() {
  return (
    <>
      <section className="home mt-16" id="home">
        <div className="content text-center absolute top-2/4 left-0 right-0">
          <h2 className="text-center text-yellow-400 font-extrabold text-3xl">
            Mọi chuyến đi đều đáng giá
          </h2>
          <h3 className="text-2xl text-white font-semibold">
            Khám Phá Các Vùng Đất Mới Cùng Chúng Tôi Những Chuyến Đi Đang Chờ
            Đợi Bạn
          </h3>
          <button className="border border-yellow-400 text-2xl font-semibold p-3 px-5 bg-yellow-400 mt-4 hover:text-white">
            <a href="#package">Khám phá ngay</a>
          </button>
        </div>
        <div className="object-cover w-full overflow-hidden">
          <Image
            // loading="lazy"
            src={bannerJpg}
            alt="banner"
            width={1800}
            sizes="100vw"
            priority={true}
            style={{
              objectFit: "contain",
              overflow: "hidden",
              maxWidth: "1800px",
              position: "relative",
              zIndex: "-1",
            }}
          />
        </div>
      </section>
      <Book />
      <Package />
    </>
  );
}
