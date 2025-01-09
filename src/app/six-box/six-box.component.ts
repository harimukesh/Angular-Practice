import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { delay, timer } from 'rxjs';

@Component({
  selector: 'app-six-box',
  standalone: true,
  imports: [],
  templateUrl: './six-box.component.html',
  styleUrl: './six-box.component.scss'
})
export class SixBoxComponent {
  public que: number[] = []
  @ViewChildren('box') boxes!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.boxes.forEach(box => {
      console.log(box.nativeElement); // Access each box element here
    });
  }

  onClick(event: any) {
    const currElement = event.target as HTMLElement
    const ind = currElement.dataset['index'] as any;
    if (!isNaN(ind)) {
      const selectedBox = this.boxes.get(ind);
      if (selectedBox) {
        selectedBox.nativeElement.classList.add("green");
        if (!this.que.includes(ind)) {
          this.que.push(ind);
        }
      }

      if (this.que.length === 7) {
        const removeClass = () => {
          if (this.que.length > 0) {
            const removeind = this.que.shift(); // Remove the first element from the queue
            this.boxes.forEach((data, index) => {
              if (index == removeind) {
                data.nativeElement.classList.remove("green"); // Remove the class from the appropriate box
              }
            });
          }
        };

        // Use RxJS interval for periodic execution
        const subscription = timer(1000, 1000).subscribe(() => {
          removeClass();
          if (this.que.length === 0) {
            subscription.unsubscribe(); // Stop the timer when the queue is empty
          }
        });
      }

    }
  }
}
