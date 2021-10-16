import React, { Component } from 'react';

import {FaLocationArrow, BsTelephoneFill, BsEnvelope,BsClock, MdArrowForwardIos}  from "react-icons/fa";
import styled from 'styled-components';
class Footer extends React.Component{
    render(){
        return(
            <FooterContainer>
                <FooterCenter>
                <div className='left'>
                    <h4 className='title'>abour resort</h4>
                    <p>lorem ipsum dolor sit amet consecteture adipisicing elit.magni, corporise
                    lorem ipsum dolor sit amet consecteture adipisicing elit.magni, corporise
                    lorem ipsum dolor sit amet consecteture adipisicing elit.magni, corporise
                    lorem ipsum dolor sit amet consecteture adipisicing elit.magni, corporise
                    </p>
                </div>
                <div className='right'>
                <h4 className='title'>contact us</h4>
                <ul className='contact-list'>
                    <li><a href='#'> 01018241944</a></li>
                    <li><a href='#'> ghada.habib94@gmail.com</a></li>
                    <li><a href='#'>address address address</a></li>
                    

                </ul>

                </div>
                </FooterCenter>
                <Copyrights> <p>all copyrights reserved to <span>ghada </span>resort </p></Copyrights>
            </FooterContainer>
        )
    }
}

export default Footer;
 const FooterContainer = styled.div`
 background-color : #000;
 color : #fff;
 padding : 1rem 0;
 `
 const FooterCenter = styled.div`
    width: 90vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 50px;
    padding : 1.5rem 0;
.title{
    text-transform: capitalize;
    margin: 0;
    margin-bottom: 1.5rem;
    color : rgb(255, 202, 8);
    display : inline-block;
    padding-bottom : 1.2rem;
    border-bottom : 2px inset rgb(255, 202, 8);
}
p{
    text-align: justify;
    margin :0;
    width: 90%;
    @media  (max-width: 768px) {
        width : 100%;
      }
}
.contact-list{
    list-style : none;
    padding :0 ;
    margin : 0;
    li{
       a{
           text-decoration : none;
           color : #fff;
           display : inline-block;
           position : relative;
           padding-left: 1.3rem;
           transition : all .35s ease-in-out;
           margin-bottom : 1rem;
           &::before{
            position: absolute;
            content: '';
            width: 7px;
            height: 7px;
            transition : all .35s ease-in-out;
            background-color: transparent;
            left: 0;
            top: calc( 50% - (7px / 2 ));
            border: 1px solid #fff;
            border-top-color: transparent;
            border-left-color: transparent;
            transform: rotate(
            -45deg);
           }
           &:hover {
               color :rgb(255, 202, 8);
               padding-left : 0;
               &::before{
                   display : none;
               }
              
           }

       }
    }
}
 `
 const Copyrights = styled.div`
    text-transform : capitalize;
    text-align: center;
    border-top: 1px solid #fff;
    padding-top : 1.5rem;
    margin-top 1rem;
    p{
        margin :0 ;
    }
    span{
        text-transform: uppercase;
        color: rgb(255, 202, 8);
    }
 `
