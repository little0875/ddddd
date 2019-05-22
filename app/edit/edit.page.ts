import { Component, OnInit } from '@angular/core';
import {PhoneService} from '../services/phone.service';
//import {Subscription} from 'rxjs/Subscription';
import { Subscription } from 'rxjs';
import {Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  subscription : Subscription;
  dataList : any = [];
  dataRow = 0;
  mb_id : string;

  constructor(private PhoneSV : PhoneService ,private route:Router,private router: ActivatedRoute) {
    this.showData(); 
  }
  showData(){
    let mb_id = this.mb_id = (this.router.snapshot.paramMap.get('mb_id'));
    this.subscription=this.PhoneSV.get(mb_id)
    .subscribe(
      data =>{
        this.dataList = data['rs'];
      }
    )
  }

  edit(form) {
    let mb_id = this.mb_id = (this.router.snapshot.paramMap.get('mb_id'));
    let mb_name = form.mb_name;
    let mb_brand = form.mb_brand;
    
    this.PhoneSV.edit(mb_id , mb_name, mb_brand).subscribe(
      
       );
       this.route.navigateByUrl("home");
       console.log(mb_id  + mb_name + mb_brand);
       
  }

  ngOnInit() {
  }

}