import { Component, OnInit,Input } from '@angular/core';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
declare var $: any;


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  keyword = 'name';
  placeHolder = 'Search Products';
  data = [
    {
      id: 1,
      name: 'HUSQVARNA 390 XP'
    },
    {
      id: 2,
      name: 'Battery BLi10'
    }
  ];
  
  mobile ="number"
  placeHolder1 = 'Customer Mobile';
  datacustomer = [
    {
      id: 1,
      name: 'Bhaarat Raj Kumar',
      number:'9884012345'
    },
    {
      id: 2,
      name: 'Dhanpal Ganesh',
      number: '98840 12347'
    },
    {
      id: 3,
      name: 'Sathish',
      number: '98840 12349'
    }
  ];


}


