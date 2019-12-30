import React, { Fragment } from "react";
import Logo from "../../assets/imgs/logo.png";
import "./container.css";
import { Row, Col } from "antd";

const Container = props => {
  return (
    <Fragment>
      <div className='Logo'>
        {/* <img src={Logo} alt='iRegisterKids' height='40' width='200' /> */}
      </div>

      <div className='cont'>{props.children}</div>
    </Fragment>
  );
};

export default Container;
