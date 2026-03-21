import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Behance, CloseTwo, Dribble, Facebook, InstagramTwo, Linkdin, Youtube } from "../svg";

// images
import logo from "@/assets/img/logo/logo.png";
import gallery_1 from "@/assets/img/menu/offcanvas/offcanvas-1.jpg";
import gallery_2 from "@/assets/img/menu/offcanvas/offcanvas-2.jpg";
import gallery_3 from "@/assets/img/menu/offcanvas/offcanvas-3.jpg";
import gallery_4 from "@/assets/img/menu/offcanvas/offcanvas-4.jpg";
import MobileMenus from "./mobile-menus";

const gallery_images = [gallery_1, gallery_2, gallery_3, gallery_4];

// prop type
type IProps = {
  openOffcanvas: boolean;
  setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileOffcanvas({openOffcanvas,setOpenOffcanvas}: IProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setOpenOffcanvas(false);
    };

    router.prefetch("/");
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [setOpenOffcanvas, router]);
  return (
    <>
      <div className={`tp-offcanvas-area ${openOffcanvas ? "opened" : ""}`}>
        <div className="tp-offcanvas-wrapper">
          <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
            <div className="tp-offcanvas-logo">
              <a href="/">
                <Image src={logo} alt="logo" />
              </a>
            </div>
            <div className="tp-offcanvas-close">
              <button
                className="tp-offcanvas-close-btn"
                onClick={() => setOpenOffcanvas(false)}
              >
                <CloseTwo />
              </button>
            </div>
          </div>
          <div className="tp-offcanvas-main">
            <div className="tp-offcanvas-content">
              <h3 className="tp-offcanvas-title">Welcome to Cloudwave</h3>
              <p>Your partner in digital transformation. We specialize in web development, software solutions, and social media marketing to elevate your brand.</p>
            </div>
            <div className="tp-main-menu-mobile d-xl-none">
              <MobileMenus setOpenOffcanvas={setOpenOffcanvas}/>
            </div>
            {/* <div className="tp-offcanvas-gallery">
              <div className="row gx-2">
                {gallery_images.map((item, i) => (
                  <div className="col-md-3 col-3" key={i}>
                    <div className="tp-offcanvas-gallery-img fix">
                      <a href="#">
                        <Image src={item} alt="gallery-img" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
            <div className="tp-offcanvas-contact">
              <h3 className="tp-offcanvas-title sm">Information</h3>

              <ul>
                <li>
                  <a href="tel:+94750439266">+94 75 043 9266</a>
                </li>
                <li>
                  <a href="mailto:contact@cloudwave.asia">contact@cloudwave.asia</a>
                </li>
                <li>
                  <a href="https://share.google/fbmKHMblsgSRd0YlR" target="_blank" rel="noopener noreferrer">NO 205, KANDY ROAD, KADUGANNAWA</a>
                </li>
              </ul>
            </div>
            <div className="tp-offcanvas-social">
              <h3 className="tp-offcanvas-title sm">Follow Us</h3>
              <ul>
                <li>
                  <a href="https://facebook.com/cloudwaveasia" target="_blank" rel="noopener noreferrer"><Facebook /></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/cloudwave_asia/" target="_blank" rel="noopener noreferrer"><InstagramTwo /></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/cloudwaveasia/" target="_blank" rel="noopener noreferrer"><Linkdin /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpenOffcanvas(false)}
        className={`body-overlay ${openOffcanvas ? "opened" : ""}`}
      ></div>
    </>
  );
}
