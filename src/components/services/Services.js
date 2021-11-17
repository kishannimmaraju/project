import React from "react";
import service from "./service";

function Services() {
  return (
    <>
      <div className="container services">
        <div className="row">
          {service.map((item) => (
            <ServiceCard data={item} />
          ))}
        </div>
      </div>
    </>
  );
}

function ServiceCard(props) {
  return (
    <>
      <div className="col-lg-4 mt-4">
        <div className="service_cardbackground p-3">
          <div className="service_cardicon">
            <img src={props.data.img} alt="" />
          </div>
          <div className="service_cardtitle">
            <h6>{props.data.cardtitle}</h6>
          </div>
          <div className="service_cardicon">
            <p>{props.data.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
