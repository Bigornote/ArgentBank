import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    //Penser à changer l'initialState
    user: null,
  },
  reducers: {
    // Créer un reducer userLogin
    // Créer un reducer userLogout
  },
});

export default userSlice.reducer;
