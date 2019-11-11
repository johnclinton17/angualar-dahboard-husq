import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
declare var $:any;

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
  animations: [
    trigger('FadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(600)
      ]),

    ])
  ]
})
export class InvoiceComponent implements OnInit {
  closeResult: string;
  modalReference = null;
  showForm = true;
  showOtp = false;

  constructor(private modalService: NgbModal) { }

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

  mobile = "number"
  placeHolder1 = 'Customer Mobile';
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




  open(content) {

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', windowClass: 'modal-holder', centered: true, keyboard: false, backdrop: 'static' });
  }

  toggleOtp() {

    this.showOtp = true;
    this.showForm = false;

  }

  redeemPoints() {

    this.modalService.dismissAll();
    this.showOtp = false;
    this.showForm = true;
    var divToChange = document.getElementById('redeem-snack');
    divToChange.className = "snack-bar-reward slideInUp";
    setTimeout(function () { divToChange.classList.remove("slideInUp");}, 10000);
    //snack - bar - reward
  }
  closeModal(){
    this.showOtp = false;
    this.showForm = true;
  }



}
