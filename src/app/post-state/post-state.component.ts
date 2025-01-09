import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getPosts } from './store/action';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PostInterface } from './types/postState.interface';
import { AppStateInterface } from './store/reducer';
import { errorSelector, isLoadingSelector, postsSelector } from './store/selector';

@Component({
  selector: 'app-post-state',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-state.component.html',
  styleUrl: './post-state.component.scss'
})
export class PostStateComponent implements OnInit {

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  posts$: Observable<PostInterface[]>;

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.posts$ = this.store.pipe(select(postsSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(getPosts());
  }

  btnClick() { }

}
