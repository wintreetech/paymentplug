import { createSlice } from "@reduxjs/toolkit";
import { setLocalStorage } from "../../utils/localstorage";
import { notifyError, notifySuccess } from "../../utils/toast";
import { IProduct } from "../../types/product-d-t";


const initialWishlistState:{wishlist: IProduct[]} = {
  wishlist: localStorage.getItem("wishlist_items") ? JSON.parse(localStorage.getItem("wishlist_items")!) : [],
};


export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: initialWishlistState,
  reducers: {
    add_to_wishlist: (state, { payload }:{ payload:IProduct }) => {
      const isExist = state.wishlist.some(
        (item: IProduct) => item.id === payload.id
      );
      if (!isExist) {
        state.wishlist.push(payload);
        notifySuccess(`${payload.title} added to wishlist`);
      } else {
        state.wishlist = state.wishlist.filter(
          (item: IProduct) => item.id !== payload.id
        );
        notifyError(`${payload.title} removed from wishlist`);
      }
      setLocalStorage("wishlist_items", state.wishlist);
    },
    remove_wishlist_product: (state, { payload }:{ payload:IProduct }) => {
      state.wishlist = state.wishlist.filter(
        (item: IProduct) => item.id !== payload.id
      );
      notifyError(`${payload.title} removed from wishlist`);
      setLocalStorage("wishlist_items", state.wishlist);
    }
  },
});

export const {
  add_to_wishlist,
  remove_wishlist_product,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;
