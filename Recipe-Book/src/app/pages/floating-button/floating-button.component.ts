import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrl: './floating-button.component.css'
})
export class FloatingButtonComponent {
  constructor(private router: Router, public dialog: MatDialog) { }

  addRecipe() {
    this.router.navigate(['dashBoard/addRecipe']);
  }

}
