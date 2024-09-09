import { useEffect } from "react";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";

const Home = () => {
  useEffect(() => {
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
};

export default Home;
