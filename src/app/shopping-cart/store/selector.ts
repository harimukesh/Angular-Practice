import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ShoppingcartState } from "./reducer";

export const selectCartState = createFeatureSelector<ShoppingcartState>('Cart');

export const selectSubTotal = createSelector(
    selectCartState,
    (state: ShoppingcartState, props: { id: number }) => state.items[props.id]?.subTotal || 0
);

export const selectCount = createSelector(
    selectCartState,
    (state: ShoppingcartState, props: { id: number }) => state.items[props.id]?.count || 0
);

export const selectTotal = createSelector(
    selectCartState,
    (state: ShoppingcartState) => state.total
);