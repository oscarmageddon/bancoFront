import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl: string = environment.customerBaseUrl;

  constructor(private http: HttpClient) { }

  saveUser(cstmr: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.baseUrl}/`, cstmr);
  }

  getAll(): Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>(`${this.baseUrl}/`);
  }

}
