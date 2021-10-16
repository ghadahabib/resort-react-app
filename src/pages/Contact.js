import React, { Component } from 'react';
import Title from "../components/Title";
import styled from 'styled-components';

class Contact extends Component {
    render() {
        return (
            <ContactUs>
            <Title title='Contact us'></Title>
            <form className='contact-form'>
                <div className='form-group'>
                    <label>Enter your email</label>
                    <input type='text' className='form-control' placeholder=' Enter your email'></input>
                </div>
                {/* end formgroup */}
                <div className='form-group'>
                    <label>Enter your phone</label>
                    <input type='text' className='form-control' placeholder=' Enter your phone'></input>
                </div>
                {/* End form group */}
                <div className='form-group'>
                    <label>your message</label>
                    <input type='text' className='form-control' placeholder='your message'></input>
                </div>
                {/* End form group */}
            </form>
            </ContactUs>
        )
    }
}
export default Contact;
const ContactUs = styled.div`
    padding : 2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .section-title{
        width : 100%;
    }
.contact-form{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .form-group{ 
        margin-bottom : 1rem;
        width:60%;
        label{
            font-size : 1rem;
            letter-spacing: 0;
            
        }
        .form-control{
            width:80%;
            outline: none;
            border: 1px solid #ddd;
            padding : .8rem 1.2rem;
            border-radius : .4rem;
            transition : all .3s ease-in-out;
            text-transform: capitalize;
            font-size:1rem;
            &:focus {
   
                box-shadow: 0px 0px 12px #bbb;
                padding-left: 1.8rem;
                ::placeholder,
                ::-webkit-input-placeholder {
                    color: rgb(255, 202, 8);
                }
            }
        }
    }
}
`