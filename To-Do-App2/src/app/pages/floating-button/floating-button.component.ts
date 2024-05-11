import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrl: './floating-button.component.css'
})
export class FloatingButtonComponent {
  constructor(private router: Router) { }
  addRecipe() {
    this.router.navigate(['addtask']);
  }

}
