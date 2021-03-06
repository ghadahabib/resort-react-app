import React, { Component } from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import RoomsContainer from '../components/RoomsContainer';
class Rooms extends Component {
    render() {
        return (
            <React.Fragment>
                <Hero hero='roomsHero'>
                    <Banner title='our rooms'>
                        <Link to='/' className='btn-primary'>
                            return home
                        </Link>
                    </Banner>
                </Hero>
                <RoomsContainer></RoomsContainer>
            </React.Fragment>
        )
    }
}
export default Rooms;