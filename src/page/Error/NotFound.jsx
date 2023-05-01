import React from "react";
import '../../scss/Error/NotFound.scss'
import cat from '../../image/cat.gif'
import { Link } from 'react-router-dom';

function NotFoundPage () {
  return(
    <div className="NotFound-Container">
      <div className="NotFound-Error">
          <p>HAHAMovie</p>
      </div>
      <div className="NotFound-Error__textbox">
        <div className="NotFound-Error__text">
          <p>해당 페이지를 찾지 못했습니다.</p>
          <p>주소가 잘못되었거나 더이상 제공되지 않는 페이지 입니다.</p>
          <Link style={{ textDecoration: 'none', color: '#d21212' }} to="/">
            <span className="GoMain">메인페이지로 이동🏠🏃‍♀️</span> 
          </Link>
        </div>
      </div> 
      <div className="ImgBox">
        <img src={cat} alt="errorlogo" />
      </div>
    </div>   
  )    
};
export default NotFoundPage