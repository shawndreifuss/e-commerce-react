
import Hero from "../section/Homepage/Hero";
import TopCategories from "../section/Homepage/TopCategories";
import HomeProducts from "../section/Homepage/HomeProducts";
import AboutHome from "../section/Homepage/AboutHome";
import Feedback from "../section/Homepage/Feedback";
import ContactForm from "../components/Homepage/ContactForm";
 import Footer from "../section/Homepage/Footer";

const Homepage = () => {
  return (
    <>
      
       <Hero />
      <TopCategories />
      <HomeProducts />
      <AboutHome />
      <Feedback />
      <ContactForm />
      <Footer /> 
    </>
  );
};

export default Homepage;
