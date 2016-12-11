import React, { Component } from 'react'

const Roof = ({}) => (
  <a-cone
    geometry="primitive:cone;height:1;openEnded:true;radiusBottom:3;radiusTop:2"
    material="flatShading:true;opacity:0.8;side:double;color:#ffffff"
    position="0 3.5 0"
  ></a-cone>
)

export default Roof
