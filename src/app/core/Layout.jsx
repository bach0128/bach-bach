"use client";
import { Routes } from "react-router-dom";
import { publicRoute } from "../routes/publicRoutes";

export default function Layout() {
  const Layout = publicRoute.layout;

  return <Routes>{publicRoute}</Routes>;
}
