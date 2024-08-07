import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from "../home-page/home-page.component";

@Component({
  selector: 'app-recharge',
  standalone: true,
  imports: [NavbarComponent, FormsModule, CommonModule, HomePageComponent],
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {
  mobileNumber!: number;
  errorMessage: string | null = null;

  constructor(
    private userService: UserService,
    private router: Router,
     // Inject the shared service
  ) {}

  ngOnInit(): void {}

  checkUser() {
    this.userService.checkUser(this.mobileNumber).subscribe(
      (exists) => {
        if (exists) {
          if (this.mobileNumber !== null) {
            this.router.navigate(['/rechargeDashboard']); // Change route to PaymentComponent
          }
        } else {
          this.errorMessage = 'No user exists with this mobile number.';
        }
      },
      (error) => {
        this.errorMessage = 'Error checking user.';
      }
    );
  }
}
