import { Component, Input, OnInit } from '@angular/core';
import { CreditCardService } from '../credit-card.service';
import { HttpParams } from '@angular/common/http';
import { CreditCardModel } from '../credit-card.model';
import { CreditCardComponent } from '../credit-card.component';

@Component({
  selector: 'add-credit-card',
  templateUrl: './add-credit-card.component.html',
  styleUrls: ['./add-credit-card.component.scss']
})
export class AddCreditCardComponent implements OnInit {
  @Input() baseRouteComponent: CreditCardComponent;
  creditCardModel!: CreditCardModel;
  constructor( private creditCardService : CreditCardService) { }

  ngOnInit() {
    this.reset();
  }

  reset() : void {
    this.creditCardModel = new CreditCardModel();
    this.creditCardModel.minimumAnnual = 1;
  }

  submit() : void {
    this.creditCardService.addCreditCard(this.creditCardModel).subscribe(data => {
      this.baseRouteComponent.close();
      this.baseRouteComponent.search();
    })
  }

  selectFile(event : any) : void {

  }

}
