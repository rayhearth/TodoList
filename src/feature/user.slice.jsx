import { createSlice } from "@reduxjs/toolkit";


export const usersSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthentificated: false,
    email: '',
    firstName: '',
    lastName: '',
    token: '',
  },
  reducers: {
    isConnected: (state, { payload }) => {
      state.isAuthentificated = !payload.isAuthentificated;
      state.email = payload.email;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.token = payload.token
    },
    updateData: (state, { payload }) => {
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
    },
    cancel: (state, { payload }) => {
      state.firstName = ' ';
      state.lastName = ' ';
    }
  }
})



export const { isConnected, updateData, cancel } = usersSlice.actions
export default usersSlice.reducer