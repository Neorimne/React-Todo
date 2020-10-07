const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];

export const contactSlice = createSlice({
    name: 'contactMessages',
    initialState,
    reducers: {
        addNewMessage: {
            reducer (state, action)  {
                state.push(action.payload);
            },
            prepare ({name, email, comment}) {
                return {
                    payload: {
                        id: Date.now(),
                        name,
                        email,
                        comment
                    }
                }
            }
        }
    }
});

export const {addNewMessage} = contactSlice.actions;

export default contactSlice.reducer;
