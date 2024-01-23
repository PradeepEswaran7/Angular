import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
        title="Product Details"

        prodetails=new FormGroup({  
          pid:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]+$/)]),
          pname:new FormControl('',[Validators.required,Validators.minLength(6), Validators.maxLength(15)]),
          pdesc:new FormControl(''),
          pprice:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]+$/)]),
          pqty:new FormControl('',[Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
          pavail:new FormControl(''),

        })

        get ProductId(){
          return this.prodetails.get("pid")
        }
        get ProductName(){
          return this.prodetails.get("pname")
        }
        get ProductPrice(){
          return this.prodetails.get("pprice")
        }
        get Productqty(){
          return this.Productqty.get("pqty")
        }
        get Productavil(){
          return this.Productavil.get("pavail")
        }

        submitReg(){
          console.log(this.prodetails.value)
        }

}