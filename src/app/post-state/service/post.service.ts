import { HttpClient } from "@angular/common/http";
import { delay, Observable, of } from "rxjs";
import { Injectable } from "@angular/core";
import { PostInterface } from "../types/postState.interface";

@Injectable({
    providedIn: 'root'
})
export class PostService {
    constructor(private readonly http: HttpClient) {
    }
    getPosts(): Observable<PostInterface[]> {
        const posts: PostInterface[] = [
            { id: '1', title: 'First post' },
            { id: '2', title: 'Second post' },
            { id: '3', title: 'Third post' },
        ];
        return of(posts).pipe(delay(2000));
    };
}