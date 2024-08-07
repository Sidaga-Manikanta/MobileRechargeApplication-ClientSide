import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plan } from './plan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private baseUrl = 'http://localhost:8090/plans';

  constructor(private http: HttpClient) {}

  getPlansByCategory(category: string): Observable<Plan[]> {
    return this.http.get<Plan[]>(`${this.baseUrl}/category/${category}`);
  }

  getAllPlans(): Observable<Plan[]> {
    return this.http.get<Plan[]>(`${this.baseUrl}/`);
  }
  getPlanById(planId:number):Observable<Plan>{
    return this.http.get<Plan>(`${this.baseUrl}/plan/${planId}`);
  }
  transferSucessRecharge(mobileNumber: number, planId:number):Observable<boolean>{
    const payLoad = {
      mobileNumber: mobileNumber,
      planId: planId
    };
      return this.http.post<boolean>(`${this.baseUrl}/payment/sucess`,payLoad)
  }
  searchedPlans(searchedKeyword :string):Observable<Plan[]>{
    return this.http.get<Plan[]> (`${this.baseUrl}/search/${searchedKeyword}`)
  }

  getUserActivePlans(userNumber: number): Observable<any[]> {
    const params = new HttpParams().set('userNumber', userNumber.toString());
    return this.http.get<any[]>(`${this.baseUrl}/userActivePlans`, {params});
  }

  
  
}
