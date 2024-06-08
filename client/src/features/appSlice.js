import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newPromotion: {
    sellerName: "",
    sellerSurname: "",
    isNew: "new",
    brand: "",
    model: "",
    salon: "",
    price: 0,
    currency: "AZN",
    paymentOptions: "all",
    frontView: null,
    backView: null,
    panelView: null,
    otherImages: [],
    year: "",
    fuelType: "",
    fuelConsumption: "",
    gearBox: "",
    transmission: "",
    pankingSensor: "",
    speedControl: "",
    innerMaterial: "",
    seatNumbers: "",
    sellerType: "",
    city: "",
    phonePrefix: "050",
    phoneNumber: "",
    distance: "",
    volume: "",
    power: "",
    innerColor: "",
    outerColor: "",
    comment: "",
    supplies: [],
    suppliesOther: [],
    forMarket: "",
  },
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
} = appSlice.actions;

export default appSlice.reducer;
