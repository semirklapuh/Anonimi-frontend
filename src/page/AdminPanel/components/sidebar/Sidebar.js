import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaTasks } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import { BiCode } from "react-icons/bi";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdOutlineBrandingWatermark } from "react-icons/md";
const Sidebar = () => {
  const [currentLink, setCurrentLink] = useState(1);
  return (
    <div>
      <Section>
        <div className="links">
          <ul>
            <li
              onClick={() => setCurrentLink(1)}
              className={currentLink === 1 ? "active" : ""}
            >
              <a href="tasks">
                <FaTasks />
                <span>Tasks</span>
              </a>
            </li>

            <li
              onClick={() => setCurrentLink(2)}
              className={currentLink === 2 ? "active" : ""}
            >
              <a href="dashboard">
                <SiSimpleanalytics />
                <span>Dashboard</span>
              </a>
            </li>

            <li
              onClick={() => setCurrentLink(3)}
              className={currentLink === 3 ? "active" : ""}
            >
              <a href="watermark">
                <MdOutlineBrandingWatermark />
                <span>Watermark</span>
              </a>
            </li>

            <li
              onClick={() => setCurrentLink(4)}
              className={currentLink === 4 ? "active" : ""}
            >
              <a href="api">
                <BiCode />
                <span>API</span>
              </a>
            </li>

            <li
              onClick={() => setCurrentLink(5)}
              className={currentLink === 5 ? "active" : ""}
            >
              <a href="profile">
                <RiAccountCircleFill />
                <span>Profile</span>
              </a>
            </li>
          </ul>
        </div>
      </Section>
    </div>
  );
};

export default Sidebar;

const Section = styled.section`
  background-color: rgba(8, 28, 59, 0.877);
  height: 100vh;

  width: 240px;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  padding: 1rem 0;
  gap: 2rem;

  .links {
    display: flex;

    ul {
      margin-top: 60px;
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: flex-start;
      li {
        padding: 0.5rem 1rem;
        border-radius: 0.6rem;
        font-size: 18px;

        &:hover {
          a {
            color: #c6f985;
          }
        }

        a {
          text-decoration: none;
          display: flex;
          gap: 1rem;
          color: white;
          padding: 10px;
        }
      }
      .active {
        background: grey;
      }
    }
  }
`;
