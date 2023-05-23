import { Component, Input, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { CreditCardApplicantService } from '../credit-card-applicant.service';
import { CreditCardApplicantComponent } from '../credit-card-applicant.component';

@Component({
  selector: 'view-credit-card-applicant',
  templateUrl: './view-credit-card-applicant.component.html',
  styleUrls: ['./view-credit-card-applicant.component.scss']
})
export class ViewCreditCardComponent implements OnInit {
  @Input() baseRouteComponent: CreditCardApplicantComponent;
  rowData!:any;
  constructor( private creditCardApplicantService : CreditCardApplicantService) { }

  ngOnInit() {
    this.rowData = this.baseRouteComponent.row;
    this.rowData.name;
  }

  reset() : void {
 
  }

  submit() : void {
    this.creditCardApplicantService.approveApplicants(this.rowData).subscribe(data => {
    })
  }

  selectFile(event : any) : void {

  }

}
