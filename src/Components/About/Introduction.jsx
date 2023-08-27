import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Arvind.png";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Arvind Maurya</span> and I am from{" "}
                <span className="different">
                  {" "}
                  Chandauli, Uttar Pradesh (India)
                </span>
                . I will complete my graduation in BTech (Information Technology)
                 in {"2024"} from{" "}
                <span className="different">
                Dr. A.P.J. Abdul Kalam Technical University, Lucknow. {" "}
                </span>
                I  have completed 6 month internship as  Backend Developer in {" "}
                <span className="different">Hoogaaa</span> a   startUp company
              </h4>
              {/* <h4>Terms That can describe me apart form Coding :</h4> */}
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
               Programmer
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Developer
              </h4>
              {/* <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                YouTuber{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Poet{" "}
              </h4> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
