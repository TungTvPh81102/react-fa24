import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutWebsite from "./pages/(website)/layout";
import HomePage from "./pages/(website)/home/page";
import SingUpPage from "./pages/(auth)/singup/page";
import LayoutAdmin from "./pages/(admin)/layout";
import DashboardPage from "./pages/(admin)/dashboard/page";
import NotFoundPage from "./pages/(website)/404/page";
import ShopPage from "./pages/(website)/shop/page";
import ProductDetailPage from "./pages/(website)/product/page";
import CartPage from "./pages/(website)/cart/page";
import CheckOutPage from "./pages/(website)/checkout/page";
import AboutPage from "./pages/(website)/about/page";
import ContactPage from "./pages/(website)/contact/page";
import CoursePage from "./pages/(admin)/course/page";
import CourseEditPage from "./pages/(admin)/course/edit/page";
import CourseCreatePage from "./pages/(admin)/course/create/page";
import { useEffect, useState } from "react";
import { Spin } from "antd";
import CourseUpdateContentPage from "./pages/(admin)/course/update-content/page";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<HomePage />}></Route>
          <Route path="shop" element={<ShopPage />}></Route>
          <Route
            path="product-detail/:id"
            element={<ProductDetailPage />}
          ></Route>
          <Route path="cart" element={<CartPage />}></Route>
          <Route path="about" element={<AboutPage />}></Route>
          <Route path="contact" element={<ContactPage />}></Route>
          <Route path="check-out" element={<CheckOutPage />}></Route>
          <Route path="sign-up" element={<SingUpPage />}></Route>
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<Navigate to="dashboard" />}></Route>
          <Route path="dashboard" element={<DashboardPage />}></Route>
          <Route path="course" element={<CoursePage />}></Route>
          <Route path="course/create" element={<CourseCreatePage />}></Route>
          <Route path="course/:id/edit" element={<CourseEditPage />}></Route>
          <Route
            path="course/update-content"
            element={<CourseUpdateContentPage />}
          ></Route>
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
