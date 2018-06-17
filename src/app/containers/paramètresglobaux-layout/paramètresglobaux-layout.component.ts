import { Component, OnInit } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { ParamServiceService } from '../../Services/ParametresGlobauxService/param-service.service';
import * as jwt_decode from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';
import { AppUserService } from '../../gestion_acces/app-user/app-user.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-paramètresglobaux-layout',
  templateUrl: './paramètresglobaux-layout.component.html',
  styleUrls: ['./paramètresglobaux-layout.component.scss']
})
export class ParamètresglobauxLayoutComponent implements OnInit {

  public selectedTime: string="00:00";
  public selectedTimeLettrage: string="00:00";;
  constructor( private atp: AmazingTimePickerService,private cookie:CookieService,private service:ParamServiceService,private appuserService:AppUserService,private datePipe: DatePipe) { }
  timepicker:any;
  data:any;
  date=new Date();
 latest_date:any;
  // open() {
  //   const amazingTimePicker = this.atp.open();
  //   amazingTimePicker.afterClose().subscribe(time => {
  //     console.log(time);
  //   });}
  open() {
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
        this.selectedTime = time;
    });
}
openlettrage() {
  const amazingTimePicker = this.atp.open();
  amazingTimePicker.afterClose().subscribe(time => {

      this.selectedTimeLettrage=time;
  });
}
  ngOnInit() {
this.service.getHoraireCompensation().subscribe(res=>{this.data=res},err=>console.log(err));

  }
  save(form){
    this.date.setHours(parseInt(this.selectedTime.substr(0,2)));
    this.date.setMinutes(parseInt(this.selectedTime.substr(3,2)));
    let parametre={
   horaireCompensation:this.date

    }

this.service.updateParam(parametre).subscribe(res=>{  
this.ngOnInit();
let div = document.getElementById('Message');
div.classList.remove('red','accent-1');
div.classList.add('rgba-green-light','animate');
div.innerHTML="L'horaire de compensation a été mis à jour !";
setTimeout(function(){
  div.classList.remove('animate');
},2000)

},err=>{
let div = document.getElementById('Message');
div.classList.remove('rgba-green-light');
div.classList.add('red','accent-1','animate');
div.innerHTML="L'horaire de compensation n'a pas été mis à jour !";
setTimeout(function(){
  div.classList.remove('animate');
},2000);

});
  }
  updatelettrage(form){

    this.date.setHours(parseInt(this.selectedTimeLettrage.substr(0,2)));
    this.date.setMinutes(parseInt(this.selectedTimeLettrage.substr(3,2)));
    let parametre={
      horaireLettrage:this.date

    }

this.service.updateLettrage(parametre).subscribe(res=>{  this.ngOnInit();let div = document.getElementById('Message');
div.classList.remove('red','accent-1');
div.classList.add('rgba-green-light','animate');
div.innerHTML="L'horaire de lettrage a été mis à jour !";
setTimeout(function(){
  div.classList.remove('animate');
},2000)

},err=>{
let div = document.getElementById('Message');
div.classList.remove('rgba-green-light');
div.classList.add('red','accent-1','animate');
div.innerHTML="L'horaire de lettrage n'a pas été mis à jour !";
setTimeout(function(){
  div.classList.remove('animate');
},2000);

});















  }

}
