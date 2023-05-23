import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreditCardApplicantService } from './credit-card-applicant.service';

@Component({
  selector: 'app-credit-card-applicant',
  templateUrl: './credit-card-applicant.component.html',
  styleUrls: ['./credit-card-applicant.component.scss']
})
export class CreditCardApplicantComponent implements OnInit {
  headers!: any[];
  creditCardApplicants!: any[];
  row!:any;
  constructor( private creditCardApplicantService : CreditCardApplicantService, private modal: NgbModal) { }

  ngOnInit() {
    this.headers = ["Action","Id", "Name", "Ic", "Dob", "Email", "Phone", "Status", "Created Date"];
    this.search();
  }

  search() : void {
    this.creditCardApplicantService.getCreditCardApplicants().subscribe((response: any)=> {
      this.creditCardApplicants = response.body;
    } );
  }


  view(content: any, row: any): void {
    this.row = row;
    const modalRef = this.modal.open(content, {size : 'lg'});
  }

  close() :void {
    this.modal.dismissAll();
  }

  getFullStatus(status: string) : string {
    const statuses: Map<string, string> = new Map([
      ['P', 'Pending'],
      ['I', 'Rejected'],
      ['A', 'Approved']
    ]);
    
    
   return statuses.get(status);

  }
}
