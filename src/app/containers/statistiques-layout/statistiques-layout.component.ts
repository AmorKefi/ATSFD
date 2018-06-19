import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { StatistiqueService } from '../../statistique.service';
import * as jwt_decode from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-statistiques-layout',
  templateUrl: './statistiques-layout.component.html',
  styleUrls: ['./statistiques-layout.component.scss']
})
export class StatistiquesLayoutComponent implements OnInit {
  chart :any = [];
  constructor(private statService: StatistiqueService,private cookie:CookieService) { }
  Token : any = jwt_decode(this.cookie.get('Token'));
  ngOnInit() {
    console.log(this.Token.PDV);
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
}
