import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Hero>
                    <Banner title='luxurious rooms' subtitle='deluxe rooms starting
                    at 139$'  >
                        <Link to='/rooms' className='btn-primary'>our rooms</Link>
                    </Banner>
                </Hero>
            {/* end hero */}
                <Services/>
                <FeaturedRooms></FeaturedRooms>
            </React.Fragment>
        )
    }
}
export default Home;