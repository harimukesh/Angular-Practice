import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarComponent } from './star/star.component'
import { SixBoxComponent } from './six-box/six-box.component'
import { PostStateComponent } from './post-state/post-state.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShoppingCartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MyApp';
}
