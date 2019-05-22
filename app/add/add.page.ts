import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PhoneService} from '../services/phone.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  constructor(private PhoneSV : PhoneService ,private route:Router) { }
 
  ngOnInit() {
  }
  insert(form) {
    let mb_name = form.mb_name;
    let mb_brand = form.mb_brand;
   
    
    this.PhoneSV.insert(mb_name, mb_brand).subscribe(
      
       );
       this.route.navigateByUrl("home");
       
  }

}
