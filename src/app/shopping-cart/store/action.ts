import { createAction, props } from "@ngrx/store";

export const increment = createAction(
    'INCREMENT',
    props<{ id: number; value: number }>()
);



export const decrement = createAction(
    'DECREMENT',
    props<{ id: number; value: number }>()
);

export const deleteCart = createAction(
    'DELETE_CART',
    props<{ id: number }>()
);