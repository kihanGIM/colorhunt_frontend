import React from "react";
import "./Signin.scss";
import Header from "../../Component/Header/Header";
import video from "../../../Videos/CHI.mov";
// import image from "../../../Images/ico_account.png";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        {/* <div className="signin_container"></div>
              <div className="loginLogo">
                <img
                  className="logo"
                  alt="colorHunt_logo"
                  src="https://colorhunt.co/img/color-hunt-palettes-logo.png" */}
        <div className="Signin">
          <div className="container">
            <div className="logoBox">
              <div className="text">
                <div className="paraGraph">
                  Color Hunt에 오신 것을 환영합니다.
                </div>
                <div className="textLine">
                  Color Hunt 하나로 충분합니다.
                  <br />
                  {/* <h4 className="textLine"> */}
                  원하는 색들을 조합해서 저장하고,
                  <br />
                  SNS에 공유해주세요!
                  {/* </h4> */}
                </div>
              </div>
              <div className="leftLogo">
                <video
                  width="90%"
                  src={video}
                  type="video/mov"
                  autoPlay
                  loop
                  muted
                ></video>
                {/* <img
                className="logo"
                alt="colorHunt_logo"
                src="https://colorhunt.co/img/color-hunt-palettes-logo.png"
              /> */}
              </div>
            </div>
            <div className="signin_container">
              <div className="loginLogo">
                <span> Color Hunt</span>

                <img
                  className="logoAnimation"
                  alt="logo gif"
                  src="https://colorhunt.co/img/logo-gif.gif"
                />
              </div>
              <div className="signinMain">
                <div className="Field">
                  <input
                    className="noBorder"
                    type="name"
                    placeholder="카카오계정(이메일 또는 전호번호)"
                  />
                </div>

                <div className="Field">
                  <input
                    className="noBorder"
                    type="password"
                    placeholder="비밀번호"
                  />
                </div>
                <div className="checkBox">
                  <div className="radioButton"></div>
                  <span className="keepLogin">로그인 상태 유지</span>
                </div>
                <button className="loginButton">로그인</button>
              </div>
              <div className="signinBottom">
                <div className="signup">회원가입</div>
                <div className="bottomRight">
                  <div className="socialAccount">소셜계정</div>
                  <div className="findPassword">비밀번호 찾기</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Signin;
