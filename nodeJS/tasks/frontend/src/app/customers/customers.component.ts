import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { UtilityService } from '../utility.service';
import { Customer } from './customers.interface';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  customers: Customer[] = [];
  constructor(private http: HttpService, private route: Router, private utility: UtilityService) { }

  ngOnInit() {
            const sub = this.http.get<Customer[]>("customers").subscribe(data => {
            this.customers = data
            console.log(this.customers);
            sub.unsubscribe();
        });   
  }

}



