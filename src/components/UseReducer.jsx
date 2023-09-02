const UseReducer = (state, action) => {

    // Redux & React's useReducer hook, 'type' property in this case is performing in response
    switch(action.type) {

        // handle 'CHANGE' action by updating the field's value and setting an error if the field is empty
        // check if the 'action.type' === string 'CHANGE', if the 'action.type' matched 'CHANGE', the code inside this case block will be executed 
        case 'CHANGE':

        return {
            ...state, [action.field]: {value: action.value, error:action.error ? null: ''},
        };
        default:
            return state;

    }
};

export default UseReducer;