import React from "react";
import TestImg from "../../assets/Contact/Talankey Laser Cutting and Bending.png";
import { Link } from "react-router-dom";

function HomeProducts() {
  return (
    <div className="infoContainer HomeProducts" id="services">
      <div className="infoContainerHeading">
        <div className="subHeading">
          <div className="headingLine"></div>
          <p>Our Diverse Services</p>
          <div className="headingLine"></div>
        </div>
        <div className="heading">
          <h2>
            Discover <br /> Talankey Solutions
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
            arcu. Commodo senectus morbi faucibus lectus sit mi. Odio
          </p>
        </div>
      </div>
      <div className="infoContainerDiv">
        <Link to="CNCturning" className="homeProductSet">
          <div className="HomeProductBackground1"></div>
          <div className="text">
            <div className="info">
              <h4>
                CNC Turning <span>Services</span>
              </h4>
              <p>
                Talankey delivers precision CNC turning services in Bangalore
                for metal, plastic, and nylon parts. With advanced lathes and
                expert programming, we machine cylindrical components with tight
                tolerances and smooth, repeatable finishes.
              </p>
            </div>
            <div className="homeProductButton">
              <div className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <mask
                    id="mask0_199_3682"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="35"
                    height="35"
                  >
                    <rect
                      x="16.5371"
                      y="34.1993"
                      width="24"
                      height="24"
                      transform="rotate(-130.82 16.5371 34.1993)"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_199_3682)">
                    <path
                      d="M21.5101 14.6827L21.0344 21.1924L19.5154 21.0814L19.8009 17.1756L14.4453 21.8016L13.4396 20.6374L18.7952 16.0113L14.8893 15.7258L15.0003 14.2069L21.5101 14.6827Z"
                      fill="#101010"
                    />
                  </g>
                </svg>
              </div>
              <p>Know More</p>
            </div>
          </div>
          <div className="Image">
            <div className="HomeProductBackground2"></div>
            <img src={TestImg}></img>
          </div>
        </Link>
        <Link to="/CNCmilling" className="homeProductSet">
          <div className="HomeProductBackground1"></div>
          <div className="text">
            <div className="info">
              <h4>
                CNC Milling <span>Services</span>
              </h4>
              <p>
                Talankey offers CNC milling services in Bangalore, crafting
                precision parts from metal, plastic, and nylon. Our multi-axis
                machines ensure accurate geometries, tight tolerances, and
                smooth surface finishes.
              </p>
            </div>
            <div className="homeProductButton">
              <div className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <mask
                    id="mask0_199_3682"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="35"
                    height="35"
                  >
                    <rect
                      x="16.5371"
                      y="34.1993"
                      width="24"
                      height="24"
                      transform="rotate(-130.82 16.5371 34.1993)"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_199_3682)">
                    <path
                      d="M21.5101 14.6827L21.0344 21.1924L19.5154 21.0814L19.8009 17.1756L14.4453 21.8016L13.4396 20.6374L18.7952 16.0113L14.8893 15.7258L15.0003 14.2069L21.5101 14.6827Z"
                      fill="#101010"
                    />
                  </g>
                </svg>
              </div>
              <p>Know More</p>
            </div>
          </div>
          <div className="Image">
            <div className="HomeProductBackground2"></div>
            <img src={TestImg}></img>
          </div>
        </Link>
        <Link to="/LaserCuttingAndBending" className="homeProductSet">
          <div className="HomeProductBackground1"></div>
          <div className="text">
            <div className="info">
              <h4>
                Metal <br /> <span>Fabrication</span>
              </h4>
              <p>
                Talankey provides custom metal fabrication services in
                Bangalore, serving industries with precision-built sheet metal
                parts and welded structures. From laser cutting to bending and
                assembly, we deliver high-strength, ready-to-use fabricated
                components.
              </p>
            </div>
            <div className="homeProductButton">
              <div className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <mask
                    id="mask0_199_3682"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="35"
                    height="35"
                  >
                    <rect
                      x="16.5371"
                      y="34.1993"
                      width="24"
                      height="24"
                      transform="rotate(-130.82 16.5371 34.1993)"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_199_3682)">
                    <path
                      d="M21.5101 14.6827L21.0344 21.1924L19.5154 21.0814L19.8009 17.1756L14.4453 21.8016L13.4396 20.6374L18.7952 16.0113L14.8893 15.7258L15.0003 14.2069L21.5101 14.6827Z"
                      fill="#101010"
                    />
                  </g>
                </svg>
              </div>
              <p>Know More</p>
            </div>
          </div>
          <div className="Image">
            <div className="HomeProductBackground2"></div>
            <img src={TestImg}></img>
          </div>
        </Link>
        <Link to="/EDM" className="homeProductSet">
          <div className="HomeProductBackground1"></div>
          <div className="text">
            <div className="info">
              <h4>
                EDM<span>Services</span>
              </h4>
              <p>
                Talankey offers precision EDM services in Bangalore for complex,
                high-tolerance components. Using wire and die-sinking EDM, we
                machine hard metals and intricate profiles with excellent
                surface finish and minimal thermal distortion.
              </p>
            </div>
            <div className="homeProductButton">
              <div className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <mask
                    id="mask0_199_3682"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="35"
                    height="35"
                  >
                    <rect
                      x="16.5371"
                      y="34.1993"
                      width="24"
                      height="24"
                      transform="rotate(-130.82 16.5371 34.1993)"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_199_3682)">
                    <path
                      d="M21.5101 14.6827L21.0344 21.1924L19.5154 21.0814L19.8009 17.1756L14.4453 21.8016L13.4396 20.6374L18.7952 16.0113L14.8893 15.7258L15.0003 14.2069L21.5101 14.6827Z"
                      fill="#101010"
                    />
                  </g>
                </svg>
              </div>
              <p>Know More</p>
            </div>
          </div>
          <div className="Image">
            <div className="HomeProductBackground2"></div>
            <img src={TestImg}></img>
          </div>
        </Link>
        <Link to="/3D_scanning" className="homeProductSet">
          <div className="HomeProductBackground1"></div>
          <div className="text">
            <div className="info">
              <h4>
                3D Scanning <span>Services</span>
              </h4>
              <p>
                Talankey offers 3D scanning services in Bangalore for reverse
                engineering and inspection. Our scanners capture precise surface
                data for CAD modeling, replication, and dimensional checks.
              </p>
            </div>
            <div className="homeProductButton">
              <div className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <mask
                    id="mask0_199_3682"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="35"
                    height="35"
                  >
                    <rect
                      x="16.5371"
                      y="34.1993"
                      width="24"
                      height="24"
                      transform="rotate(-130.82 16.5371 34.1993)"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_199_3682)">
                    <path
                      d="M21.5101 14.6827L21.0344 21.1924L19.5154 21.0814L19.8009 17.1756L14.4453 21.8016L13.4396 20.6374L18.7952 16.0113L14.8893 15.7258L15.0003 14.2069L21.5101 14.6827Z"
                      fill="#101010"
                    />
                  </g>
                </svg>
              </div>
              <p>Know More</p>
            </div>
          </div>
          <div className="Image">
            <div className="HomeProductBackground2"></div>
            <img src={TestImg}></img>
          </div>
        </Link>
        <Link to="/3D_printing" className="homeProductSet">
          <div className="HomeProductBackground1"></div>
          <div className="text">
            <div className="info">
              <h4>
                3D Printing <span>Services</span>
              </h4>
              <p>
                Talankey delivers 3D printing services in Bangalore for rapid
                prototyping and custom parts. Using additive manufacturing, we
                build accurate plastic and nylon components with quick
                turnaround times.
              </p>
            </div>
            <div className="homeProductButton">
              <div className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <mask
                    id="mask0_199_3682"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="35"
                    height="35"
                  >
                    <rect
                      x="16.5371"
                      y="34.1993"
                      width="24"
                      height="24"
                      transform="rotate(-130.82 16.5371 34.1993)"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_199_3682)">
                    <path
                      d="M21.5101 14.6827L21.0344 21.1924L19.5154 21.0814L19.8009 17.1756L14.4453 21.8016L13.4396 20.6374L18.7952 16.0113L14.8893 15.7258L15.0003 14.2069L21.5101 14.6827Z"
                      fill="#101010"
                    />
                  </g>
                </svg>
              </div>
              <p>Know More</p>
            </div>
          </div>
          <div className="Image">
            <div className="HomeProductBackground2"></div>
            <img src={TestImg}></img>
          </div>
        </Link>
        <Link to="/about" className="homeProductSet">
          <div className="HomeProductBackground1"></div>
          <div className="text">
            <div className="info">
              <h4>
                Special Purpose Machine <span>Manufacturing</span>
              </h4>
              <p>
                Talankey manufactures custom Special Purpose Machines (SPMs) in
                Bangalore to improve production efficiency. Engineered for
                precision and speed, our SPMs are built to meet specific
                industrial process needs.
              </p>
            </div>
            <div className="homeProductButton">
              <div className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <mask
                    id="mask0_199_3682"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="35"
                    height="35"
                  >
                    <rect
                      x="16.5371"
                      y="34.1993"
                      width="24"
                      height="24"
                      transform="rotate(-130.82 16.5371 34.1993)"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_199_3682)">
                    <path
                      d="M21.5101 14.6827L21.0344 21.1924L19.5154 21.0814L19.8009 17.1756L14.4453 21.8016L13.4396 20.6374L18.7952 16.0113L14.8893 15.7258L15.0003 14.2069L21.5101 14.6827Z"
                      fill="#101010"
                    />
                  </g>
                </svg>
              </div>
              <p>Know More</p>
            </div>
          </div>
          <div className="Image">
            <div className="HomeProductBackground2"></div>
            <img src={TestImg}></img>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomeProducts;
