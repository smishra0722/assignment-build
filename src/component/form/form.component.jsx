import React from 'react';
import './form.styles.scss';
import {ContextConsumer} from '../context-api/context-api';

export const Form = () => {
    return(
        <ContextConsumer>
        {
            value => {
                return(
                    <div className='input-form'>
                    <div className='form'>
                        <div className='group'>
                            <label className='form-input-label'>First Name:</label>
                            <input type='text' name='firstName' className='form-input' value={value.firstName} onChange={(e) => value.handleChange(e, 'firstName')} required />
                        </div>
                        <div className='group'>
                            <label className='form-input-label'>Last Name:</label>
                            <input type='text' name='lastName' className='form-input' value={value.lastName} onChange={(e) => value.handleChange(e, 'lastName')} required />
                        </div>
                        <div className='dropdown'>
                            <label className='form-input-label'>Qualifications:</label>
                            <select className='form-input' name='qualification' onChange={(e) => value.handleChange(e, 'qualification')} value={value.qualification}>
                                <option value='' disabled>--Select--</option>
                                <option value='BscIt'>BscIt</option>
                                <option value='BCA'>BCA</option>
                            </select>
                        </div>
                        <div className='dropdown'>
                            <label className='form-input-label'>Date of Birth:</label>
                            <input type='date' className='form-input' name='dateOfBirth' onChange={(e) => value.handleChange(e, 'dateOfBirth')} value={value.dateOfBirth} />
                        </div>
                        <div className='dropdown'>
                            <label className='form-input-label'>Martial Status:</label>
                            <select className='form-input' name='martialStatus' onChange={(e) => value.handleChange(e, 'martialStatus')} value={value.martialStatus}>
                                <option value='' disabled>--Select--</option>
                                <option value='Married'>Married</option>
                                <option value='UnMarried'>UnMarried</option>
                            </select>
                        </div>
                        <div className='dropdown'>
                        <label className='form-input-label'>Hobbies:</label><span className="radio">
                                <label>
                                    <input
                                    type="radio"
                                    value="Reading"
                                    checked={value.selectedRadio === "Reading"}
                                    onChange={(e) => value.handleRadioChange(e, 'selectedRadio')}
                                    />
                                    Reading
                                </label>
                            </span>
                            <span className="radio">
                                <label>
                                    <input
                                    type="radio"
                                    value="Games"
                                    checked={value.selectedRadio === "Games"}
                                    onChange={(e) => value.handleRadioChange(e, 'selectedRadio')}
                                    />
                                    Games
                                </label>
                            </span>
                            <span className="radio">
                                <label>
                                    <input
                                    type="radio"
                                    value="Movies"
                                    checked={value.selectedRadio === "Movies"}
                                    onChange={(e) => value.handleRadioChange(e, 'selectedRadio')}
                                    />
                                    Movies
                                </label>
                            </span>
                        </div>
                        <button className='submit-button' onClick={() => value.handleSubmit(value.id)}>{value.id? 'Save': 'Add'}</button>   
                    </div>          
                </div>
                ) 
            }
        }
            
        </ContextConsumer>
    );
}
