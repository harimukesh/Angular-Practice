import { Component } from '@angular/core';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [],
  templateUrl: './star.component.html',
  styleUrl: './star.component.scss'
})
export class StarComponent {
  public stars = Array(5);

  onClickStar(index: any) {
    console.log(index + 1);
    const starList = document.querySelectorAll('.star');
    starList.forEach((item, ind) => {
      (starList[ind] as HTMLElement).style.color = "grey";
    })

    for (let i = 0; i <= index; i++) {
      (starList[i] as HTMLElement).style.color = "yellow";
    }
  }
}
