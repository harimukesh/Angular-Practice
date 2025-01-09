export interface PostsStateInterface {
    isLoading: boolean;
    posts: PostInterface[];
    error: string | null;
}

export interface PostInterface {
    id: string;
    title: string;
}