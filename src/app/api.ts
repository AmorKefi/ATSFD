import { Component, OnInit } from '@angular/core';


export class ApiUrl implements OnInit {
     transactionURL='http://localhost:8080/api/';
     accessURL='http://localhost:8080/access/';
     authURL='http://localhost:8080/auth/';
    
    
    
    constructor(){}
 
  
    ngOnInit() {
        
    }
  
  }