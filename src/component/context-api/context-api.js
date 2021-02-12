import React, { Component } from 'react'


const ProductContext = React.createContext();
export class ContextProvider extends Component {

    state = {
        AllData: [],
        id: '',
        firstName: '', 
        lastName: '', 
        qualification: '',
        dateOfBirth: '', 
        maritalStatus: '', 
        selectedRadio: '',
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }
    handleRadioChange = (e) => {
        // handles the chnage event for radio buttons
        this.setState({selectedRadio: e.target.value});
    }
    deleteInput = (id) => {
        //Taked id and removes the object when id matched
        const newData = this.state.AllData.filter(data => data.id !== id);
        this.setState({AllData: [...newData]});
    }
    findInput(id) {
        //Takes id as argument as returns index if matched
        const input = this.state.AllData.find(data => data.id === id);
        return input;
    }
    editInput = (id_) => {
        // displays the value of row into the form field when edit button is clicked
        const {id, firstName, lastName, qualification, dateOfBirth, maritalStatus, selectedRadio} = this.findInput(id_);
        this.setState({id, firstName, lastName, qualification, dateOfBirth, maritalStatus, selectedRadio});
    }
    handleSubmit = (id_) => {
        const {id, firstName, lastName, qualification, dateOfBirth, maritalStatus, selectedRadio} = this.state;
        const data = this.state.AllData;
        if(id_) {
            //replaces the existing object data with updated one
            const index = data.findIndex(input => input.id === id_);
            const updatedData =  {id, firstName, lastName, qualification, dateOfBirth, maritalStatus, selectedRadio};
            data.splice(index, 1, updatedData);
            this.setState({AllData: [...data], id: '', firstName:'', lastName:'', qualification:'', dateOfBirth:'', maritalStatus:'', selectedRadio:''});
        } else {
            // adds new row field
            this.setState({AllData: [{id: Math.floor(Math.random()*1000), firstName, lastName, qualification, dateOfBirth, maritalStatus, selectedRadio},...data]})
        } 
    }


    render() {
        //Context APi Provider Component
        return (
            <div>
                
                <ProductContext.Provider 
                value={{...this.state, handleChange: this.handleChange,
                     handleRadioChange: this.handleRadioChange,
                    deleteInput: this.deleteInput, editInput: this.editInput,
                    handleSubmit: this.handleSubmit}}
                >
                    {this.props.children}
                </ProductContext.Provider>
            </div>
        )
    }
}

export const ContextConsumer = ProductContext.Consumer;


