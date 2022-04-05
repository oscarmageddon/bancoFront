import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/interfaces/customer.interface';
import { userLogin } from 'src/app/interfaces/user-login.interface';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-registroclientes',
  templateUrl: './registroclientes.component.html',
  styleUrls: ['./registroclientes.component.scss']
})
export class RegistroclientesComponent implements OnInit {

  constructor(private cstmrService: CustomerService,
              private router: Router,
              private login: LoginService) { }

  ngOnInit(): void {
  }

  msg: string = '';
  error: boolean = false;

  customer: Customer = {
    firstName: '',
    secondName: '',
    firstSurName: '',
    secondSurName: '',
    passport: '',
    phoneOne: '',
    phoneTwo: '',
    mainAddressOne: '',
    optionalAddres: '',
    referencePhoneOne: '',
    referencePhoneTwo: '',
    civilStatus: '',
    contactName: '',
    contactPhone: '',
    companyName: '',
    profession: ''
  }

  get auth() {
    return this.login.auth;
  }

  saveCustomer() {
    this.msg = '';
    this.error = false;
    if (this.inputValidation()) {
      this.cstmrService.saveUser(this.customer)
        .subscribe({
          next: (resp) => {
            console.log('respuesta', resp);
            this.msg = 'Cliente ' + resp.firstName + ' ' + resp.firstSurName + ' creado exitosamente con el ID: ' + resp.id;
            this.clearCustomer();
          },
          error: (err) => {
            console.log('error', err);
            this.error = true;
            this.msg = 'Error al crear cliente';
          }
        });
    } else {
      console.log('error ingreso de datos', this.customer);
      this.error = true;
      this.msg = 'Error al ingresar dato obligatorio';
    }
  }

  inputValidation(): boolean {
    return this.customer.firstName != '' && this.customer.secondName != '' && this.customer.firstSurName != '' &&
      this.customer.secondSurName != '' && this.customer.phoneOne != '' && this.customer.mainAddressOne != '' &&
      this.customer.civilStatus != '' && this.customer.contactName != '' && this.customer.contactPhone != '' &&
      this.customer.profession != '';
  }

  clearCustomer() {
    this.customer = {
      id: null,
      firstName: '',
      secondName: '',
      firstSurName: '',
      secondSurName: '',
      passport: '',
      phoneOne: '',
      phoneTwo: '',
      mainAddressOne: '',
      optionalAddres: '',
      referencePhoneOne: '',
      referencePhoneTwo: '',
      civilStatus: '',
      contactName: '',
      contactPhone: '',
      companyName: '',
      profession: ''
    }
  }

  goToDataList() {
    this.clearCustomer();
    this.router.navigateByUrl('/editarclientes');
  }
}
