import React from "react";
import "./Signin.scss";
import Header from "../../../Component/Header/Header";

class Signin extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="Signin">
          <div className="container">
            <div className="leftNotsure">dcsd</div>
            <div className="signin_container">
              <div className="loginLogo">
                <img
                  className="logo"
                  alt="colorHunt_logo"
                  src="https://colorhunt.co/img/color-hunt-palettes-logo.png"
                />
                <span> Color Hunt</span>
              </div>
              <div className="signinMain">
                <div className="Field">
                  <input
                    type="name"
                    placeholder="카카오계정(이메일 또는 전호번호)"
                  />
                </div>
                <div className="Field">
                  <input type="password" placeholder="비밀번호" />
                </div>
                <div className="checkBox">
                  <span className="keepLogin">로그인 상태 유지</span>
                </div>
                <div className="loginButton">로그인</div>
              </div>
              <div className="signinBottom">
                <span className="signup">회원가입</span>
                <span className="socialAccount">소셜계정</span>
                <span className="findPassword">비밀번호 찾기</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Signin;
