import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const LayoutWebsite = () => {
  return (
    <div>
      <section className="pt-4">
        <Header />
      </section>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default LayoutWebsite;
