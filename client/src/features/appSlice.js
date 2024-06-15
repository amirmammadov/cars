import { createSlice } from "@reduxjs/toolkit";

import { newPromotion } from "../constants/new-promotion";
import { moreFiltersValues } from "../constants/more-filters";

const initialState = {
  newPromotion: newPromotion,
  moreFilterValues: moreFiltersValues,
  moreFiltersCleared: false,
  promotionEmpty: [],
  favCarIds: JSON.parse(localStorage.getItem("favCars")) || [],
  compareCarIds: JSON.parse(localStorage.getItem("compareCars")) || [],
  isLoggedIn: true,
  mobileForAccActive: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPromotionEmpty: (state, action) => {
      state.promotionEmpty.push(action.payload);
    },
    resetPromotionEmpty: (state) => {
      state.promotionEmpty = [];
    },
    setNewPromotionState: (state, action) => {
      const { name, value } = action.payload;

      state.newPromotion = {
        ...state.newPromotion,
        [name]: value,
      };
    },
    setMoreFilterValues: (state, action) => {
      const { name, value } = action.payload;

      state.moreFilterValues = {
        ...state.moreFilterValues,
        [name]: value,
      };
    },
    setFavCarIds: (state, action) => {
      const carId = action.payload.ID;

      if (state.favCarIds.includes(carId)) {
        const index = state.favCarIds.indexOf(carId);

        state.favCarIds.splice(index, 1);
        localStorage.setItem("favCars", JSON.stringify(state.favCarIds));
      } else {
        state.favCarIds.push(carId);
        localStorage.setItem("favCars", JSON.stringify(state.favCarIds));
      }
    },
    setCompareCarIds: (state, action) => {
      const carId = action.payload.ID;

      if (state.compareCarIds.includes(carId)) {
        const index = state.compareCarIds.indexOf(carId);

        state.compareCarIds.splice(index, 1);
        localStorage.setItem(
          "compareCars",
          JSON.stringify(state.compareCarIds)
        );
      } else {
        state.compareCarIds.push(carId);
        localStorage.setItem(
          "compareCars",
          JSON.stringify(state.compareCarIds)
        );
      }
    },
    setMoreFilters: (state) => {
      state.moreFilterValues = [];
    },
    setMoreFiltersCleared: (state) => {
      state.moreFiltersCleared = !state.moreFiltersCleared;
      state.moreFilterValues = moreFiltersValues;
    },
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setMobileAccActive: (state, action) => {
      state.mobileForAccActive = action.payload;
    },
  },
});

export const {
  setNewPromotionState,
  setPromotionEmpty,
  resetPromotionEmpty,
  setFavCarIds,
  setLoggedIn,
  setMobileAccActive,
  setCompareCarIds,
  setMoreFilters,
  setMoreFiltersCleared,
  setMoreFilterValues,
} = appSlice.actions;

export default appSlice.reducer;
