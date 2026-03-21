import React from "react";
import Image from "next/image";

// images
import shape_1 from "@/assets/img/home-01/team/team-details-shape-1.png";
import shape_2 from "@/assets/img/home-01/team/team-details-shape-2.png";
import { ITeamDT } from "@/types/team-d-t";

// prop type
type IProps = {
  item: ITeamDT;
};

export default function TeamDetailsArea({ item }: IProps) {
  return (
    <div className="tm-details-wrapper p-relative">
      <div className="tm-details-shape-1">
        <Image src={shape_1} alt="shape" width={100} height={100} />
      </div>
      <div className="tm-details-shape-2">
        <Image src={shape_2} alt="shape" width={100} height={100} />
      </div>
      <div className="container">
        <div className="row align-items-center align-items-xxl-end">
          <div className="col-xl-6 col-lg-6 col-md-7">
            <div className="tm-details-content-wrap z-index-5">
              <div className="tm-details-title-box mb-20">
                <span className="tm-hero-subtitle">{item?.designation}</span>
                <h4 className="tm-details-title">{item?.name}</h4>
              </div>
              <div className="tm-details-text">
                <p>{item?.description}</p>
              </div>
              {/* <div className="tm-details-portfolio mb-50">
                <span className="tm-details-social-title">Portfolio:</span>
                <a href="#">Behance</a>
                <a href="#">Dribbble</a>
                <a href="#">Meduim</a>
              </div>
              <div className="tm-details-social">
                <span className="tm-details-social-title">Follow:</span>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>  */}
            </div>
          </div> 
          <div className="col-xl-6 col-lg-6 col-md-5">
            <div className="tm-details-thumb" style={{position: "relative", width: "100%", height: "auto"}}>
              {item?.image && <img src={item.image} alt="team-details-img" style={{objectFit: "cover"}} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
