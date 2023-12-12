import Footer from "./Footer";
import Home from "./Home/Home";
import Navbar from "./Navbar";

export default function DefaultLayout() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
