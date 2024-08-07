import { BootstrapOptions, Component, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import bootstrap from '../../main.server';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Plan } from '../plan';
import { PlanService } from '../plan.service';
import { UserService } from '../user.service';
import { RechargeComponent } from '../recharge/recharge.component';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [NavbarComponent, CommonModule,RechargeComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
  paymentMode: string = '';
  planId!: number;
  selectedPlan: Plan = new Plan();
  showModal = false;
  mobileNumber!: number;


  showUpiInput = false;
  selectedUpi = '';

  selectUpi(upi: string) {
    this.selectedUpi = upi;
    this.showUpiInput = true;
  }
  
  
  constructor(
    private router: Router,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,
    private planService: PlanService,
    private userService:UserService 
    // Inject the shared service
  ) {}

  ngOnInit() {
    this.planId = this.activatedRoute.snapshot.params['planId'];
    console.log(this.planId);
    this.fetchPlan();

    // Retrieve mobile number from localStorage via shared service
    this.userService.getCurrentUser().subscribe(data=>{
      this.mobileNumber=data;
      console.log('Mobile Number:', this.mobileNumber);

    }) || 0;
  }

  fetchPlan() {
    this.planService.getPlanById(this.planId).subscribe(
      (data) => {
        this.selectedPlan = data;
        console.log('Plan fetched:', this.selectedPlan);
      },
      (error) => {
        console.error('Error fetching plan:', error);
      }
    );
  }

  openPaymentPopup(paymentMode: string) {
    this.paymentMode = paymentMode;
    console.log(this.paymentMode);
    this.showModal = true;
  }

  paymentSucess(isSucess:string){
    if(isSucess=="sucess"){
      this.handleYes();
    }
    else{
      this.closeModal;
    }
  }

  closeModal() {
    this.showModal = false;
  }

  handleYes() {
    this.closeModal();
    this.planService.transferSucessRecharge(this.mobileNumber,this.selectedPlan.plan_Id).subscribe(data=>{
      console.log(data);
    });
    this.router.navigate(['/rechargeDashboard']);
  }
}


