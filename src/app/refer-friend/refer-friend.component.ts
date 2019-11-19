import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-refer-friend',
  templateUrl: './refer-friend.component.html',
  styleUrls: ['./refer-friend.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-30%)' }),
        animate('200ms ease-in', style({ transform: 'translateY(0%)' }))
      ])//,
      // transition(':leave', [
      //   animate('200ms ease-in', style({ transform: 'translateY(-100%)' }))
      // ])
    ]),
    trigger('FadeAnimation', [

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({ opacity: 0 }),
        animate(600)
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      //   transition(':leave',
      //     animate(300, style({ opacity: 0 })))
    ])
  ]
})
export class ReferFriendComponent implements OnInit {
  refer_screen = true;
  product_screen = false;

  constructor() { }

  ngOnInit() {
  }

    mobile = "number"
  placeHolder1 = '';
  datacustomer = [
    {
      id: 1,
      name: 'Bhaarat Raj Kumar',
      number: '9884012345'
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



  keyword = 'name';
  placeHolder = "Search Product Catalogue"
  data = [
    {
      id: 10,
      name: 'battery bLi10'
    },
    {
      id: 11,
      name: '353 965 16 97-18'
    },
    {
      id: 12,
      name: '372 XP 965 70 26-38'
    }
  ];



  referButton(){
    this.refer_screen = false;
    this.product_screen = true;
  }

  backRefer(){
    this.refer_screen = true;
    this.product_screen = false;
  }


}
