import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Customer } from 'src/app/interfaces/customer.interface';

@Component({
  selector: 'app-editarclientes',
  templateUrl: './editarclientes.component.html',
  styleUrls: ['./editarclientes.component.scss']
})
export class EditarclientesComponent implements OnInit {
  customers: Array<Customer> = new Array<Customer>();

  constructor(private cstmrService: CustomerService, private router: Router,) { }

  ngOnInit(): void {
    this.getAllCustomer();
  }

  getAllCustomer() {
    this.cstmrService.getAll()
      .subscribe(customers => {
        this.customers = customers;
        console.log('Customers', customers);
      });
  }

  goToEditClient() {
    this.router.navigateByUrl('/registroclientes');
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
