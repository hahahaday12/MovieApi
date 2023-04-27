import React from "react";
import '../scss/components/loading.scss'

function Loading() {
  return(
    <div className="LoadingContainer">
      <div className="LoadingContainer-box">
        <img src={("../src/image/spin.gif")}/>
      </div>
    </div>
  )
}
export default Loading