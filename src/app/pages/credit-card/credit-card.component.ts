import { Component, OnInit } from '@angular/core';
import { CreditCardService } from './credit-card.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {
  headers!: any[];
  creditCards!: any[];
  constructor( private creditCardService : CreditCardService, private modal: NgbModal) { }

  ngOnInit() {
    this.headers = ["Id", "Name", "Description", "Minimum Annual Income"];
    this.search();
  }

  search() : void {
    this.creditCardService.getCreditCardsType().subscribe((response: any)=> {
      this.creditCards = response.body;
    } );
  }


  openCreditCard(content: any): void {
    this.modal.open(content);
  }

  close() :void {
    this.modal.dismissAll();
  }

}
