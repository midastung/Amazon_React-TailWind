import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    //Actions-執行命令
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(basketItem => basketItem.id === action.payload.id);

      let newBasket = [...state.items];

      if(index >= 0) {
        //The item exists in the basket... remove it...
        newBasket.splice(index, 1)
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload.id}) as its not in basket`
        );
      }

      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
//計算購物車裡的總價錢
//reduce() 為陣列疊加函式，total是累加器，而我們可以設定0為初始值 
export const seletorTotal = (state) => state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
