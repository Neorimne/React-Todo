const SET_NEW_MESSAGE = 'SET_NEW_MESSAGE';

let initState = {
    messages: []
};

const contactReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_NEW_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.newMessage]
            }
        default:
            return state;    
    }
};


export const setNewMessage = (newMessage) => ({type: SET_NEW_MESSAGE, newMessage});

export default contactReducer;