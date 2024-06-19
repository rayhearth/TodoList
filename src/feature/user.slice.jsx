import { createSlice } from "@reduxjs/toolkit";


export const usersSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthentificated: false,
    email: '',
    firstName: '',
    lastName: '',
    photoUrl: '',
    token: '',
  },
  reducers: {
    isConnected: (state, { payload }) => {
      state.isAuthentificated = true;
      state.email = payload.email;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.photoUrl = payload.photoUrl;
      state.token = payload.token
    },
    updateData: (state, { payload }) => {
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
    },
    cancel: (state) => {
      state.isAuthentificated = false
      state.firstName = ' ';
      state.lastName = ' ';
      state.photoUrl = '';
      state.token = ' ';
    }
  }
})



export const { isConnected, updateData, cancel } = usersSlice.actions
export default usersSlice.reducer