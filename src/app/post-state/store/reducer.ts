import { createReducer, on } from "@ngrx/store";
import { PostInterface } from "../types/postState.interface";
import { getPosts, getPostsFailure, getPostsSuccess } from "./action";

export interface AppStateInterface {
    posts: PostsStateInterface;
}

export interface PostsStateInterface {
    isLoading: boolean;
    posts: PostInterface[];
    error: string | null;
}

export const initialState: PostsStateInterface = {
    isLoading: false,
    posts: [],
    error: null,
};


export const reducers = createReducer(
    initialState,
    on(getPosts, (state) => ({ ...state, isLoading: true })),
    on(getPostsSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        posts: action.posts,
    })),
    on(getPostsFailure, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error,
    }))
);