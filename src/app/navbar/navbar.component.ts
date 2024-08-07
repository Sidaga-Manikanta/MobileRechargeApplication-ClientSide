import { Component, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import bootstrap from '../../main.server';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  formSubmitted = false;

  onFormSubmit(event: Event) {
    event.preventDefault();
    // Form submission logic here

    // Simulate form submission
    setTimeout(() => {
      this.formSubmitted = true;
    }, 500); // Simulate network delay

    // Hide the success message after 5 seconds
    setTimeout(() => {
      this.formSubmitted = false;
    }, 5000); // Adjust the time as needed
  }

  closeSuccessMessage() {
    this.formSubmitted = false;
  }
}