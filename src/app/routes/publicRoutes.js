import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import SecondLayout from "../layouts/SecondLayout/SecondLayout";

import { Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Detail from "../pages/Detail/Detail";
import Book from "../pages/BookTour/Book";

export const publicRoute = (
  <>
    <Route element={<DefaultLayout />}>
      <Route path="/" element={<Home />} />
    </Route>

    <Route element={<SecondLayout />}>
      <Route path="/detail" element={<Detail />} />
      <Route path="/book" element={<Book />} />
    </Route>

    {/* <Route element={<AuthLayout />}>
      <Route element={<GuestMiddlewares />}>
        <Route path="login" element={<Login />} />
      </Route>
    </Route> */}
  </>
);
