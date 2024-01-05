import "./App.css";
import "./Style/Main.css";
import "./Style/Responsive.css";
import { Route, Routes } from "react-router-dom";

import Navigation from "./Component/Navigation";
import About from "./Pages/About Page/About";
import Footer from "./Component/Footer";
import Home from "./Pages/Home Page/Home";
import Contact from "./Pages/Contact Page/Contact";
import LandingPage2 from "./Pages/LandingPage2/LandingPage2";
import Blogs from "./Pages/Blogs/Blogs";
import SeoPage from "./Pages/SEO Page/SeoPage";
import SocialMedia from "./Pages/Social Media/SocialMedia";
import PaidAds from "./Pages/Paid Ads Page/PaidAds";
import WebDevPage from "./Pages/WebDev Service/WebDevPage";
function App() {
  return (
    <>
      {/* <LandingPage2 /> */}
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about-page" exact element={<About />} />
        {/* Industries We Serve */}
        <Route
          path="/industries-we-serve/hotel-marketing"
          exact
          element={<Blogs />}
        />
        <Route
          path="/industries-we-serve/restaurant-marketing"
          exact
          element={<Blogs />}
        />
        <Route
          path="/industries-we-serve/cloud-kithen-marketing"
          exact
          element={<Blogs />}
        />
        {/*Services*/}
        <Route path="/services/website-development" exact element={<WebDevPage />} />
        <Route
          path="/services/social-media-marketing"
          exact
          element={<SocialMedia />}
        />
        <Route
          path="/services/serach-engine-optimization"
          exact
          element={<SeoPage />}
        />
        <Route path="/services/paid-ad-campaigns" exact element={<PaidAds />} />
        <Route path="/blog-page" exact element={<Blogs />} />

        <Route path="/blog-page" exact element={<Blogs />} />
        <Route path="/contact-page" exact element={<Contact />} />
        <Route path="/landing-page2" exact element={<LandingPage2 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
