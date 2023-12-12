import React from "react";

export default function Book() {
  return (
    <section
      id="book"
      className="p-4 flex flex-col items-center justify-center w-3/6"
    >
      <h1 className="text-center text-6xl text-yellow-500 opacity-80">
        Tìm ưu đãi
      </h1>
      <div className="mb-3">
        <label htmlFor="contact-form" className="text-lg">
          Hãy Liên Hệ Với Tôi Bằng :
        </label>
        <br />
        <input
          className="border border-yellow-500 outline-none min-w-full "
          id="contact-form"
          type="text"
          placeholder="Email or phonenumber"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="contact" className="text-lg">
          Tôi Muốn Đến :
        </label>
        <br />
        <input
          className="border border-yellow-500 outline-none  min-w-full"
          id="contact"
          type="text"
          placeholder="Address"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="contact" className="text-lg">
          Chúng Tôi Có :
        </label>
        <br />
        <input
          className="border border-yellow-500 outline-none min-w-full "
          id="contact"
          type="number"
          placeholder="How many persons in your group?"
        />
      </div>
    </section>
  );
}
