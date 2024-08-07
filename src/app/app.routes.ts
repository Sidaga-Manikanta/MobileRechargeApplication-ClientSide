import { Routes } from '@angular/router';
import { RechargeComponent } from './recharge/recharge.component';
import { RechargeDashboardComponent } from './recharge-dashboard/recharge-dashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    {path:'recharge',component:RechargeComponent},
    {path:'rechargeDashboard',component:RechargeDashboardComponent},
    {path:'home',component:HomePageComponent},
    {path:'payment/:planId',component:PaymentComponent},
    {path:'',redirectTo:'recharge', pathMatch:'full'}
];
