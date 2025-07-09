import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  book: [
    {
      name: "hello",
    },
  ],
};

export const BookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
});


export default BookSlice.reducer;