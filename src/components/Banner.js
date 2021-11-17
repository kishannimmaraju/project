import React from "react";
import Button from "react-bootstrap/Button";

function Banner() {
  return (
    <>
      <div className=" bannerbackground banner ">
        <div className="text-center container pb-3">
          <h2 className="banner-title">Welcome to Metro Labs</h2>
          <div className="text-center mx-5 ">
            <p className=" banner-content">
              Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
              est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
              mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
              repellendus deleniti vel. Minus et tempore modi architecto.
            </p>
          </div>
          {/* <button className="banner-button">Read More</button> */}
          <Button variant="outline-warning">Read More</Button>
        </div>
      </div>
    </>
  );
}

export default Banner;
