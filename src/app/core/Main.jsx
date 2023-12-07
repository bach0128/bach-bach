"use client";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";

export default function Main({ pageProps }) {
  return (
    <BrowserRouter>
      <Layout {...pageProps} />
    </BrowserRouter>
  );
}
