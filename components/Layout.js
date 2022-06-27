import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Navbar />
      <div className="container my-5">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
