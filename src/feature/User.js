import { createSlice } from "@reduxjs/toolkit";

const initiateValue = {name: "", age: 0, email: ""}

export const User = createSlice ({
  name: 'user',
  initialState: initiateValue,
  reducers: {
    login: (state, action) {
        state.value = action.payload
    },
    logout: (state) {
        state.value = initiateValue
    }
  }
})

