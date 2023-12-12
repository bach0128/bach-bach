import Footer from "./Footer";
import Navbar from "./Navbar";
import Book from "./bookTour/Book";
import Detail from "./detail/Detail";

export default function CustomerLayout() {
  return (
    <div>
      <Navbar />
      <Detail />
      <Book />
      <Footer />
    </div>
  );
}
