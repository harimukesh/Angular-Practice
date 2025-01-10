import { createReducer, on } from '@ngrx/store';
import { increment, decrement, deleteCart } from './action';

export interface Counter {
    count: number;
    subTotal: number;
}

export interface ShoppingcartState {
    items: { [id: number]: Counter };
    total: number;
}

export const initialState: ShoppingcartState = {
    items: {},
    total: 0
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
            },
            total: state.total + value
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
            total: state.items[id].subTotal === 0 ? state.total : state.total - value,
            items: {
                ...state.items,
                [id]: newItem
            }
        };
    }),

    on(deleteCart, (state, { id }) => {
        const deletedItem = state.items[id] || { count: 0, subTotal: 0 };
        const newItem = {
            ...deletedItem,
            count: 0,
            subTotal: 0
        };
        return {
            ...state,
            total: state.total - state.items[id].subTotal,
            items: {
                ...state.items,
                [id]: newItem
            }
        };
    })
);