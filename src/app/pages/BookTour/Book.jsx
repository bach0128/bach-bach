import React from "react";

export default function Book() {
  return (
    <section className="mt-80">
      <div className="grid grid-cols-3">
        <div>
          <h1 className="text-yellow-500 text-6xl text-opacity-90">
            Ưu Đãi 48.000.000 Cho 7người/7ngày
          </h1>
        </div>
        <div>
          <label htmlFor="number">Số Điện Thoại </label>
          <br />
          <input
            className="p-2 w-50 h-12 border border-yellow-600 rounded-2xl"
            id="number"
            type="number"
            placeholder="098123464"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <br />
          <input
            className="p-2 w-50 h-12 border border-yellow-600 rounded-2xl"
            id="email"
            type="email"
            placeholder="email@gmail.com"
          />
        </div>
        <div>
          <label htmlFor="plant">Thời Gian Đi</label>
          <br />
          <input
            className="p-2 w-50 h-12 border border-yellow-600 rounded-2xl"
            id="plant"
            type="date"
            placeholder="mm/dd/yyyy"
            required
          />
        </div>
        <div>
          <label htmlFor="persons">Số lượng</label>
          <br />
          <input
            className="p-2 w-50 h-12 border border-yellow-600 rounded-2xl"
            id="person"
            type="number"
            placeholder="6"
          />
        </div>
        <div>
          <label htmlFor="payment">Payment</label>
          <br />
          <select className="border border-yellow-600 rounded-2xl" id="payment">
            <option value={0}>Momo</option>
            <option value={1}>Paypal</option>
            <option value={2}>Bank</option>
          </select>
        </div>
      </div>
    </section>
  );
}
