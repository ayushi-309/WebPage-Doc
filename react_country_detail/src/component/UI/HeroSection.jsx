import { FaLongArrowAltRight } from "react-icons/fa";

export const HeroSection = () => {
  return (
       <main className="hero-section main">
      <div className="container grid grid grid-two-cols">

        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the World, One Country at a Time.
          </h1>
          <p className="paragrapgh">
            Discover the history, culture, and beauty of every nation. Sort,
            search, filter through countries to find the details you need.
          </p>
          <button className="btn btn-darken btn-inline bg-white-box">
             Start Exploring{ <FaLongArrowAltRight />}
          </button>
          
        </div>
        <div className="hero-image">
          <img src="https://www.wcos.org/wp-content/uploads/world-in-hands.png"
          alt="world beauty"
          className="banner-image"
           />
        </div>

      </div>
    </main>
  );

};
    