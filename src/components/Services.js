import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from './Title';

class Services extends Component {
state ={
    services :[
        {
        icon : <FaCocktail/>,
        title : 'free cocktail',
        info :'lorem ipsum dolor sit amet consecteture adipisicing elit.magni, corporise'
        },
        {
            icon : <FaHiking/>,
            title : 'Endless Hikikn',
            info :'lorem ipsum dolor sit amet consecteture adipisicing elit.magni, corporise'
        },
        {
            icon : <FaShuttleVan/>,
            title : 'free shuttle',
            info :'lorem ipsum dolor sit amet consecteture adipisicing elit.magni, corporise'
        },
        {
            icon : <FaBeer/>,
            title : 'strongest Beer',
            info :'lorem ipsum dolor sit amet consecteture adipisicing elit.magni, corporise'
        }

    ]
}
    render() {
        return (
            <div className='services'>
                <Title title='services'></Title>
                <div className='services-center'>
                {this.state.services.map((item,index) => {
                    return<article key={index} className='service'>
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                </article>
                })}
                </div>
            </div>
        )
    }
}
export default Services;