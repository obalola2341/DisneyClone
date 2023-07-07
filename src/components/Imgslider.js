import React from 'react'
import styled from 'styled-components'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Imgslider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      }
  return (
    <Moveit {...settings} >
        <Wrap>
            <img src='slider-badging.jpg'/>
        </Wrap>
        <Wrap>
            <img src='slider-badag.jpg'/>
        </Wrap>
        <Wrap>
            <img src='slider-scales.jpg'/>
        </Wrap>
        <Wrap>
            <img src='slider-scale.jpg'/>
        </Wrap>
        

    </Moveit>
  )
}

export default Imgslider

let Moveit= styled(Slider)`

    margin-top: 20px;

    ul li button {
        &:before {
            content:"dtyy";
            font-size:10px;
            color:rgb(150,158,171);
        }
        
    }

    li.slick-active button::before {
        color:white;
    }

    .slick-list {
        overflow:visible;
    }

    button {
        z-index: 1 ;
    }


`
let Wrap= styled.div`
    cursor:pointer;
    

    img{
        border: 4px solid transparent;
        border-radius:4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration:300ms;

        &:hover{
            border:4px solid white;
        }
    }

`