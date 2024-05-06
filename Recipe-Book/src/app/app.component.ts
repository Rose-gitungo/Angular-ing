import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // allComponentsLoaded: boolean = false;

  // ngAfterViewInit(): void {
  //   this.allComponentsLoaded = true;
  // }
  title = 'Recipe-Book';
}
