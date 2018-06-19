import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { StatistiqueService } from '../../statistique.service';
import * as jwt_decode from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';
import { SfdserviceService } from '../../Services/SFDService/sfdservice.service';
import { TransactionsService } from '../../transactions.service';

@Component({
  selector: 'app-statistiques-layout',
  templateUrl: './statistiques-layout.component.html',
  styleUrls: ['./statistiques-layout.component.scss']
})
export class StatistiquesLayoutComponent implements OnInit {
  chart :any = [];
  Acteur:any;
  sfds:any;
  constructor(private statService: StatistiqueService,private cookie:CookieService,private sfdservice:SfdserviceService,private transer:TransactionsService) { }
  Token : any = jwt_decode(this.cookie.get('Token'));
  ngOnInit() {
    this.sfdservice.getAll().subscribe(res=>this.sfds=res,err=>console.log(err));
    this.Acteur= this.Token.authorities[0].authority;
    console.log(this.Acteur);
    if(this.Token.PDV!=null){
    this.statService.getEchange(this.Token.PDV.codePdv).subscribe(res=>{
      let totalcashin  = Number(res['totalCashin']);
      let totalCashout = Number(res['totalCashout']);
      console.log(totalcashin);
      console.log(totalCashout);
this.chart = new Chart('canvas',{
  type: 'bar',
  data:{
    datasets : [
    {
      data : [totalcashin],
      backgroundColor:'rgba(255, 99, 132, 0.2)',
      borderWidth:1,
      borderColor:'rgba(255,99,132,1)',
      label:'cashin'
    },
    {
      data : [totalCashout],
      backgroundColor:'rgba(54, 162, 235, 0.2)',
      borderWidth: 1,
      borderColor:'rgba(54, 162, 235, 1)',
      label:'cashout'
    }
    ]
  },
  options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            },
            gridLines:{
              display : true
            }
        }]
    },
    legend: {
            display: true,
            position: 'top',
            labels: {
                fontColor: '#333',
                fontSize:18,
                boxWidth:50
            }
        }
  }

});
    },err=>console.log(err));
  }
}
filter(f){
  console.log(f.value.SFD)
  this.transer.getAl().map(res=>{
    let list=[];
    let listr=[];
    for(let key in res){
      if(res.hasOwnProperty(key)){
        list.push(res[key]);
      }
    }
    list.forEach(element => {
       if(element.cashIn.user.sfd.codesfd == f.value.SFD.codesfd){
         listr.push(element);
       }
       if(element.cashOut!=null){
        if(element.cashOut.user.sfd.codesfd == f.value.SFD.codesfd){
          listr.push(element);
        }
       }
    });
    return listr; 
  }).subscribe(res=>{
     console.log(res);
     let totalcashin  = 0 
     let totalCashout = 0
   res.forEach(element => {
     if(element.cashIn!=null){
       totalcashin+=element.cashIn.montantTransfert;
     }
     if(element.cashOut!=null){
       totalCashout+=element.cashOut.montantTransfert;
     }
     totalcashin = Number(totalcashin);
     totalCashout= Number(totalCashout);
     this.chart = new Chart('canvas',{
      type: 'bar',
      data:{
        datasets : [
        {
          data : [totalcashin],
          backgroundColor:'rgba(255, 99, 132, 0.2)',
          borderWidth:1,
          borderColor:'rgba(255,99,132,1)',
          label:'cashin'
        },
        {
          data : [totalCashout],
          backgroundColor:'rgba(54, 162, 235, 0.2)',
          borderWidth: 1,
          borderColor:'rgba(54, 162, 235, 1)',
          label:'cashout'
        }
        ]
      },
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                },
                gridLines:{
                  display : true
                }
            }]
        },
        legend: {
                display: true,
                position: 'top',
                labels: {
                    fontColor: '#333',
                    fontSize:18,
                    boxWidth:50
                }
            }
      }
    
    });
   });
  },err=>console.log(err))
}
}
