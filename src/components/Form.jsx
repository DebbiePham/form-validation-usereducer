import React, {useReducer, useState} from 'react';


import UseReducer from './UseReducer';


const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

const Form = () => {
    const [state, dispatch] = useReducer(UseReducer, initialState);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        const{name, value} = e.target;
        dispatch({type:'CHANGE', field: name, value});
    };

    const handleSubmit = (e) => {
        // prevent form from refresh page
        e.preventDefault(); 
        // mark the form as submitted
        setFormSubmitted(true);
        // validate the form, check if any field is empty
        const hasErrors = Object.values(state).some((field) => !field.value);
        if (hasErrors) {
            alert('All fields can not be empty');
        } else {
            alert('Form has been submitted successfully!')
        }

        // clear the input field values after successfull submission
        dispatch({type:'CHANGE', field: 'firstName', value:''});
        dispatch({type:'CHANGE', field: 'lastName', value:''});
        dispatch({type:'CHANGE', field: 'email', value:''});
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='form'>
                <label htmlFor='firstName'>First Name: </label>
                <input name='firstName' type='text' value={state.firstName.value} onChange={handleChange} />
                { formSubmitted && state.firstName.error && <p>{state.firstName.error}</p>}
            </div>
            <div className='form'>
                <label htmlFor='lastName'>Last Name: </label>
                <input type='text' name='lastName' value={state.lastName.value} onChange={handleChange} />
                {formSubmitted && state.lastName.error && <p>{state.lastName.error}</p>}
            </div>
            <div className='form'>
                <label htmlFor='email'>Email: </label>
                <input type='email' name='email' value={state.email.value} onChange={handleChange} />
                {formSubmitted && state.email.error && <p>{state.email.error}</p>}
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default Form;