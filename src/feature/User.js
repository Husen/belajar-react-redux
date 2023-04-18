import { createSlice } from "@reduxjs/toolkit";

const initiateValue = {name: "", age: 0, email: ""}

export const userSlice = createSlice ({
  name: 'user',
  initialState: {value: initiateValue},
  reducers: {
    login: (state, action) => {
        state.value = action.payload
    },
    logout: (state) => {
        state.value = initiateValue
    }
  }
})

export const {login, logout} = userSlice.actions
export default userSlice.reducer