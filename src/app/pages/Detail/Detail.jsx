"use client";

import { fetchPages } from "@/redux/middlewares/pageMiddlewares";
import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Detail() {
  const details = useSelector((state) => state.pages.pages);
  const status = useSelector((state) => state.pages.status);

  const { home, Book, destinationBox, galleryBox } = details;
  const dispatch = useDispatch();

  console.log(details);

  useEffect(() => {
    dispatch(fetchPages(1));
  }, []);

  if (status === "pending") {
    return <h3>Loading...</h3>;
  }
  return (
    <Fragment key={2}>
      <section className="detail mt-20" id="/">
        <div className="detail-home">
          <h1 className="text-yellow-500">{home?.name}</h1>
          <h2>{home?.content}</h2>
          <p>{home?.textcontent}</p>
        </div>
      </section>
      <section id="about">
        <div className="grid grid-cols-4">
          {destinationBox?.map(({ h3, p, src }) => (
            <div className="m-2 rounded-xl border border-none bg-neutral-400 p-2 flex flex-col items-center justify-center">
              <h3 className="text-yellow-500">{h3}</h3>
              <p>{p}</p>
              <img
                className="mt-10 rounded-md hover:scale-y-110 object-cover"
                src={`https://api-pages.vercel.app/${src}`}
                alt="lol"
              />
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
}
