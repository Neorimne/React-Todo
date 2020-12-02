import { PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

interface IMessage {
  name: string;
  email: string;
  comment: string;
}

export const contactSlice = createSlice({
  name: "contactMessages",
  initialState: [] as Array<IMessage>,
  reducers: {
    addNewMessage: {
      reducer(state: Array<IMessage>, action: PayloadAction<IMessage>) {
        state.push(action.payload);
      },
      prepare({ name, email, comment }: IMessage) {
        return {
          payload: {
            id: Date.now(),
            name,
            email,
            comment,
          },
        };
      },
    },
  },
});

export const { addNewMessage } = contactSlice.actions;

export default contactSlice.reducer;
