import React from "react";
import "./Signin.scss";
import video from "../../../Videos/CHI.mov";

class Signin extends React.Component {
  render() {
    return (
      <div className="Signin">
        <div className="container">
          <div className="logoBox">
            <h2 className="paraGraph">Color Hunt 하나로 충분합니다.</h2>
            <h4 className="textLine">
              Color Hunt로 원하는 모든 색을 뽑아내세요.
              <br></br>
              <h4 className="textLine">
                원하는 Color끼리 Palettes에 추가하세요.
              </h4>
            </h4>
            <div className="leftLogo">
              <video
                width="90%"
                src={video}
                type="video/mov"
                autoPlay
                loop
              ></video>
              {/* <img
                className="logoAnimation"
                alt="logo gif"
                src="https://colorhunt.co/img/logo-gif.gif"
              /> */}
            </div>
          </div>
          <div className="signin_container">
            <div className="loginLogo">
              <span> Color Hunt</span>
              <img
                className="logo"
                alt="colorHunt_logo"
                src="https://colorhunt.co/img/color-hunt-palettes-logo.png"
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
    );
  }
}
export default Signin;
