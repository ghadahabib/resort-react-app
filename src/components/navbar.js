import React, { Component } from 'react'
import Logo from '../images/logo.svg';
import resort from '../images/resort.jpg';
import {FaAlignRight } from "react-icons/fa";
import {Link} from 'react-router-dom';
class Navbar extends Component {
    state = {
        IsOpen :false
    }
    handleToggle = () =>{
        this.setState({IsOpen: !this.state.IsOpen});
    }
    render() {
        return (
            <nav className='navbar'>
                <div className='nav-center'>
                    <div className='nav-header'>
                        <Link to='/' style={{height : "80px" , width: '190px'}}>
                            <img src={resort} alt='beach resort'></img>
                        </Link>
                        <button type='button' className='nav-btn' onClick={this.handleToggle}>
                            <FaAlignRight className='nav-icon'></FaAlignRight>
                        </button>
                    </div>
                    {/* End navheader */}
                    <ul className={this.state.IsOpen?'nav-links show-nav' : 'nav-links' }>
                        <li className='link'>
                            <Link to='/'>home</Link>
                        </li>
                        <li className='link'>
                            <Link to='/rooms'>rooms</Link>
                        </li>
                        <li className='link'>
                            <Link to='/contact'>Contact</Link>
                        </li>
                        
                    </ul>
                    {/* End navLinks */}
                </div>
                {/* End nav-center */}
            </nav>
            // End nav
        )
    }
}
export default Navbar;