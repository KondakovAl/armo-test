import { createSlice } from '@reduxjs/toolkit';

interface Popups {
  isFirstNameOpen: boolean;
  isLastNameOpen: boolean;
  isEmailOpen: boolean;
  isBirthDateOpen: boolean;
  isAccessOpen: boolean;
}

const popupsSlice = createSlice({
  name: 'popups',
  initialState: {
    isFirstNameOpen: false,
    isLastNameOpen: false,
    isEmailOpen: false,
    isBirthDateOpen: false,
    isAccessOpen: false,
  } as Popups,
  reducers: {
    setIsFirstNameOpen: (state: Popups) => {
      state.isFirstNameOpen = !state.isFirstNameOpen;
      state.isLastNameOpen = false;
      state.isEmailOpen = false;
      state.isBirthDateOpen = false;
      state.isAccessOpen = false;
    },
    setIsLastNameOpen: (state: Popups) => {
      state.isFirstNameOpen = false;
      state.isLastNameOpen = !state.isLastNameOpen;
      state.isEmailOpen = false;
      state.isBirthDateOpen = false;
      state.isAccessOpen = false;
    },
    setIsEmailOpen: (state: Popups) => {
      state.isFirstNameOpen = false;
      state.isLastNameOpen = false;
      state.isEmailOpen = !state.isEmailOpen;
      state.isBirthDateOpen = false;
      state.isAccessOpen = false;
    },
    setIsBirthDateOpen: (state: Popups) => {
      state.isFirstNameOpen = false;
      state.isLastNameOpen = false;
      state.isEmailOpen = false;
      state.isBirthDateOpen = !state.isBirthDateOpen;
      state.isAccessOpen = false;
    },
    setIsAccessOpen: (state: Popups) => {
      state.isFirstNameOpen = false;
      state.isLastNameOpen = false;
      state.isEmailOpen = false;
      state.isBirthDateOpen = false;
      state.isAccessOpen = !state.isAccessOpen;
    },
    setAllClosed: (state: Popups) => {
      state.isFirstNameOpen = false;
      state.isLastNameOpen = false;
      state.isEmailOpen = false;
      state.isBirthDateOpen = false;
      state.isAccessOpen = false;
    },
  },
});

export const {
  setIsFirstNameOpen,
  setIsLastNameOpen,
  setIsEmailOpen,
  setIsBirthDateOpen,
  setIsAccessOpen,
  setAllClosed,
} = popupsSlice.actions;

export default popupsSlice.reducer;
