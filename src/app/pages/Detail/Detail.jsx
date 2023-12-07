"use client";

import { fetchPages } from "@/redux/middlewares/pageMiddlewares";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Detail() {
  const book = useSelector((state) => state.pages.pages);
  const status = useSelector((state) => state.pages.status);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchPages(1));
  // }, []);

  if (status === "pending") {
    return <h3>Loading...</h3>;
  }
  return (
    <section className="detail" id="book">
      <h1> Hello anh em </h1>
    </section>
  );
}
