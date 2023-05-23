import { Component, OnInit } from '@angular/core';
import { CreditCardService } from '../credit-card/credit-card.service';
import { CreditCardApplyModel } from './credit-card-apply.model';
import { CreditCardApplyService } from './credit-card-apply.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';  

@Component({
  selector: 'app-credit-card-apply',
  templateUrl: './credit-card-apply.component.html',
  styleUrls: ['./credit-card-apply.component.scss']
})
export class CreditCardApplyComponent implements OnInit {

  occupations!:any[];
  sectorIndustry!: any[];
  creditCards!: any[];
  icFilePath!: string;

  selectedValue = null;
  url!:any;
  creditCardApplyModel!: CreditCardApplyModel;
  constructor(private creditCardService : CreditCardService, private creditCardApplyService : CreditCardApplyService) { }

  ngOnInit() {
    this.occupations = [
      {id: 1, name: "Software Engineer"},
      {id: 2, name: "Executive"},
      {id: 3, name: "Teacher"},
      {id: 4, name: "Government Officer"},
      {id: 5, name: "Banker"},
      {id: 6, name: "Others"}
    ];
    this.sectorIndustry = [
      {id: 1, name: "Banking and Finance"},
      {id: 2, name: "Information and Technology"},
      {id: 3, name: "Education"},
      {id: 4, name: "Government"},
      {id: 5, name: "Agriculture"},
      {id: 6, name: "Others"}
    ];

    this.creditCardService.getCreditCardsType().subscribe((response: any)=> {
      this.creditCards = response.body;
    } );

    this.creditCardApplyModel = new CreditCardApplyModel();
  }

  onSelectICFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
      this.icFilePath = event.target.files[0].name;
    }
  }

  submit() : void {
    this.creditCardApplyModel.icPath = this.icFilePath;
    this.creditCardApplyService.addCreditCard(this.creditCardApplyModel).subscribe(data => {
      console.log(data);
      Swal.fire({
        text: "Apply Success",
      });
    })
  }
}
