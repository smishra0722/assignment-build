import React, { Component } from 'react';
import './form-input-display.styles.scss';
import {ContextConsumer} from '../context-api/context-api';
import { Form } from '../form/form.component';


export default class FormInput extends Component {
    render() {
        return (
            <div className='container'>
                <Form />
                <ContextConsumer>
                    {
                        (value) => {
                            return(
                                <div className='display-input'>
                                    <div className='display-input-header'>
                                        <span className='headings'>First Name</span>
                                        <span className='headings'>Last Name</span>
                                        <span className='headings'>Qualification</span>
                                        <span className='headings'>Date of Birth</span>
                                        <span className='headings'>Marital Status</span>
                                        <span className='headings'>Hobby</span>
                                        <span className='headings'>Actions</span>
                                    </div>
                                    {
                                        value.AllData.map(input => (
                                            <div className='display-input-items'>
                                            <span className='items'>{input.firstName}</span>
                                            <span className='items'>{input.lastName}</span>
                                            <span className='items'>{input.qualification}</span>
                                            <span className='items'>{input.dateOfBirth}</span>
                                            <span className='items'>{input.maritalStatus}</span>
                                            <span className='items'>{input.selectedRadio}</span>
                                            <span className='items-btn'><button className='btn' onClick={() => value.editInput(input.id)}>Edit</button>
                                            <button className='btn' onClick={() => value.deleteInput(input.id)}>Delete</button></span>
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }
                    }
                </ContextConsumer>
            </div>
        )
    }
}
