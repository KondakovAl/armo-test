import { createSlice } from '@reduxjs/toolkit';

interface filterSliceProps {
  firstName: string;
  lastName: string;
  email: string;
  birthdate: string;
  access: string | boolean;
}

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    firstName: '',
    lastName: '',
    email: '',
    birthdate: '',
    access: '',
  } as filterSliceProps,
  reducers: {
    setFirstName: (state: filterSliceProps, { payload }) => {
      state.firstName = payload;
      state.lastName = '';
      state.email = '';
      state.birthdate = '';
      state.access = '';
    },
    setLastName: (state: filterSliceProps, { payload }) => {
      state.firstName = '';
      state.lastName = payload;
      state.email = '';
      state.birthdate = '';
      state.access = '';
    },
    setEmail: (state: filterSliceProps, { payload }) => {
      state.firstName = '';
      state.lastName = '';
      state.email = payload;
      state.birthdate = '';
      state.access = '';
    },
    setBirthDate: (state: filterSliceProps, { payload }) => {
      state.firstName = '';
      state.lastName = '';
      state.email = '';
      state.birthdate = payload;
      state.access = '';
    },
    setAccess: (state: filterSliceProps, { payload }) => {
      state.firstName = '';
      state.lastName = '';
      state.email = '';
      state.birthdate = '';
      state.access = payload;
    },
    clearAll: (state: filterSliceProps) => {
      state.firstName = '';
      state.lastName = '';
      state.email = '';
      state.birthdate = '';
      state.access = '';
    },
  },
});

export const {
  setFirstName,
  setLastName,
  setBirthDate,
  setEmail,
  setAccess,
  clearAll,
} = filterSlice.actions;

export default filterSlice.reducer;
