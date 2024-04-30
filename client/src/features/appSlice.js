import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newPromotion: {
    brand: "",
    model: [],
    price: -1,
    currency: "",
    frontView: null,
    backView: null,
    panelView: null,
    otherImages: [],
    year: "",
    fuelType: "",
    fuelConsumption: "",
    gearBox: "",
    transmission: "",
    pankingSensor: [],
    speedControl: [],
    innerMaterial: "",
    airBags: [],
    seatNumbers: "",
    seller: "",
    ownNumbers: "",
    city: "",
    firstName: "",
    lastName: "",
    phonePrefix: "",
    phone: "",
    mail: "",
    distance: "",
    volume: "",
    power: "",
    comment: "",
    vin: "",
  },
  favCarIds: JSON.parse(localStorage.getItem("favCars")) || [],
  isLoggedIn: true,
  mobileForAccActive: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setEmptyNewPromotion: (state) => {
      state.newPromotion = {};
    },
    setNewPromotionState: (state, action) => {
      const { name, value } = action.payload;

      state.newPromotion = {
        ...state.newPromotion,
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
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setMobileAccActive: (state, action) => {
      state.mobileForAccActive = action.payload;
    },
  },
});

export const {
  setEmptyNewPromotion,
  setNewPromotionState,
  setFavCarIds,
  setLoggedIn,
  setMobileAccActive,
} = appSlice.actions;

export default appSlice.reducer;
