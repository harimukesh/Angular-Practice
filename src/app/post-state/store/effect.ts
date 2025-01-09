import { map, mergeMap, of, switchMap } from "rxjs";
import { getPostsSuccess, getPosts } from "./action";
import { inject, Injectable } from "@angular/core";
import { PostService } from "../service/post.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";


@Injectable()
export class PostsEffects {
    getPosts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getPosts),
            mergeMap(() => {
                return this.postsService.getPosts().pipe(
                    map((posts) => getPostsSuccess({ posts }))
                );
            })
        )
    );

    constructor(private actions$: Actions, private postsService: PostService) { }
}
