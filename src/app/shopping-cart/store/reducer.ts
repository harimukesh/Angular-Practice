import { createReducer, on } from '@ngrx/store';
import { increment, decrement } from './action';

export interface Counter {
    count: number;
    subTotal: number;
}

export interface ShoppingcartState {
    items: { [id: number]: Counter };
}

export const initialState: ShoppingcartState = {
    items: {}
};

export const shoppingCartReducer = createReducer(
    initialState,
    on(increment, (state, { id, value }) => {
        const incrementedItem = state.items[id] || { count: 0, subTotal: 0 };
        const newItem = {
            ...incrementedItem,
            count: incrementedItem.count + 1,
            subTotal: incrementedItem.subTotal + value
        };
        return {
            ...state,
            items: {
                ...state.items,
                [id]: newItem
            }
        };
    }),
    on(decrement, (state, { id, value }) => {
        const decrementedItem = state.items[id] || { count: 0, subTotal: 0 };
        const newItem = {
            ...decrementedItem,
            count: decrementedItem.count - 1 >= 0 ? decrementedItem.count - 1 : 0,
            subTotal: decrementedItem.subTotal - value >= 0 ? decrementedItem.subTotal - value : 0
        };
        return {
            ...state,
            items: {
                ...state.items,
                [id]: newItem
            }
        };
    })
);