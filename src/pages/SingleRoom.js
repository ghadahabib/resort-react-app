import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import { RoomContext } from '../Context';
import StyledHero from '../components/StyledHero';
class SingleRoom extends Component {
    constructor(props){
        super(props);
        this.state = {
            slug : this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType = RoomContext;
    componentDidMount(){}
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if(!room){
            return(
            <div className='error'>
                <h3>nosuch room could be found</h3>
                <Link to='/rooms' className='btn-primary'>back to rooms</Link>
            </div>
        )};
        const {name, description, capacity, size, price, breakfast, extras,
        pets, images} = room;
        const [mainImg, ...restImges] = images;
        return (
        <React.Fragment>
            <StyledHero img={mainImg || this.state.defaultBcg}>
                <Banner title={`${name} room`}>
                    <Link to ='/rooms'className='btn-primary'>back to rooms</Link>
                </Banner>
            </StyledHero>
            <section className='single-room'>
                <div className='single-room-images'>
                    {restImges.map ((item,index) => {
                        return<img key={index} src={item} alt={name}></img>
                    })}
                </div>
                <div className='single-room-info'>
                    <article className='desc'>
                        <h3>details</h3>
                        <p>{description}</p>
                    </article> 
                    <article className='info'>
                        <h3>info</h3>
                        <h6>$ : {price}</h6>
                        <h6>size : {size}</h6>
                        <h6>max capacity : {
                            capacity > 1 ? `${capacity} pepole` : `${capacity} person`    
                            } 
                        </h6>
                        <h6>
                            {pets? 'pets are allowed' : 'pets are not allowed'} 
                        </h6>
                        <h6>{breakfast && 'breakfast is free'}</h6>
                    </article>       
                </div>
            </section>
            <section className='room-extras'>
                <h6>extras</h6>
                <ul className='extras'>
                    {extras.map((item,index) => {
                        return<li key={index}>- {item}</li>
                    })}
                </ul>
            </section>
        </React.Fragment>
        )}
}

export default  SingleRoom;