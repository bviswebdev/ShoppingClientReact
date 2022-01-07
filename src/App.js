import logo from "./logo.svg";
import "./App.css";
import { TestComponent, HomeComponent } from "./testmodule";
import { Routes, Route, Link } from "react-router-dom";
import AppLayoutPage from "./pages/AppLayoutPage";
import {
  TestPage,
  AboutUsPage,
  ContactUsPage,
  LoginPage,
  SignUpPage,
  HomePage,
} from "./pages/public";
import {
  ProductDetailPage,
  ViewProductsPage,
  ProductLayoutPage,
} from "./pages/shared";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppLayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="aboutus" element={<AboutUsPage />} />
          <Route path="contactus" element={<ContactUsPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="viewproducts" element={<ViewProductsPage />} />
          <Route path="product" element={<ProductLayoutPage />}>
            <Route index element={<ViewProductsPage />} />
            <Route path=":productId" element={<ProductDetailPage />} />
          </Route>
          <Route path="test" element={<TestPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
