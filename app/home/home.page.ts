import { Component } from '@angular/core';
import { PhoneService} from '../services/phone.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { isNgTemplate } from '@angular/compiler';
import { insertView } from '@ionic/angular/dist/directives/navigation/stack-utils';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  subscription : Subscription;
  dataList : any = [];

  constructor(private PhoneSV : PhoneService , private route:Router){  //เห็นได้แค่เฉพาะคลาสนี้
    this.showData(); //นำข้อมูลมาโชว์
    
    }

  showData() {
    this.subscription = this.PhoneSV.getPhone()
    .subscribe( data =>
      {
        //console.log("data:"+data['rs'].lenght);
        
        this.dataList = data['rs'];
      });
      
    }
    adddata(){
      this.route.navigateByUrl("add");
      
    }
    
    deletedata(mb_name){
      this.PhoneSV.del(mb_name).subscribe();
      console.log(mb_name);
    }
    
    editdata(mb_id){
      this.route.navigate(['/edit',{mb_id : mb_id}]);
      console.log(mb_id);
    }

}
