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
  favCarIds: [],
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
      } else {
        state.favCarIds.push(carId);
      }
    },
  },
});

export const { setEmptyNewPromotion, setNewPromotionState, setFavCarIds } =
  appSlice.actions;

export default appSlice.reducer;
