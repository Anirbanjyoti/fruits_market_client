import React from "react";
import "./Home.css";
import img1 from "../../Sources/Images/online-grocery-gurgaon.jpg";
import img2 from "../../Sources/Images/3-2-vegetable-transparent.png";
import img3 from "../../Sources/Images/pulses.png";
import img4 from "../../Sources/Images/fruit-1.png";
import img5 from "../../Sources/Images/free-delivery-1-1.png";
import img6 from "../../Sources/Images/grocery.png";
import testimonial from "../../Sources/Images/buy-fresh-fruits-online.jpg";
import Header from "../Shared/Header/Header";

const Home = () => {
  return (
    <div>
    <Header></Header>
      <h1 className="fancy-title">
        Fresh Fruits Online & Fresh Vegetables Online
      </h1>
      <div className="home-container">
        <div className="fancy">
          <p className="fancy-para">
            We’re not your average fruit importers. We have expertise in
            sourcing the choicest of fresh fruits from around the world and
            distributing it across the length and breadth of India. Our
            top-notch distribution network strengthened through almost a century
            of existence in the fruit business, works efficiently to ensure the
            fruits are delivered far and wide with an intriguing depth of
            freshness. We provide fresh fruits online and fresh vegetables
            online.
          </p>
          <p className="clearboth" style={{ fontSize: "20px" }}>
            {" "}
            We have expertise in providing fresh fruits online and fresh
            vegetables online and offline and sourcing the choicest of fruits
            and vegetables from around the world
          </p>
        </div>
        {/* Product section */}
        <div className="home-veg-prod">
          <p><img src={img1} alt="images"></img><br></br>
          <b>Vegetables</b><br></br>
          <button className="btn btn-success">Click Here</button></p>
          <p><img src={img2} alt="images"></img><br></br>
          <b>Fruits</b><br></br>
          <button className="btn btn-success">Click Here</button></p>
          <p><img src={img3} alt="images"></img><br></br>
          <b>Seeds</b><br></br>
          <button className="btn btn-success">Click Here</button></p>
          <p><img className="down-fruits" src={img4} alt="images"></img><br></br>
          <b>Beverage</b></p>
          <p><img className="down-fruits" src={img5} alt="images"></img><br></br>
          <b>Shipping</b></p>
          <p><img className="down-fruits" src={img6} alt="images"></img><br></br>
          <b>Supply</b></p>
        </div>
      </div>
      <div className="bar"></div>
      <div className="testimonials">
        <img src={testimonial} alt="images"></img>
      </div>
      <div className="info">
        <div className="left">
          <p>Final Sales</p>

          <h1>Get More with Les</h1>
          <button className="btn btn-info">All Products</button>
        </div>
        <div className="right">
          <p>Hurry up Before the Stock Ends</p>

          <h1>Online Order</h1>
          <button className="btn btn-info">Get it now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
