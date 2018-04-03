import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AppFunctionService } from '../app-function.service';
import { FunctionApp } from '../../../model/function-app';

@Component({
  selector: 'app-add-function',
  templateUrl: './add-function.component.html',
  styleUrls: ['./add-function.component.scss']
})

export class AddFunctionComponent implements OnInit {
  message:string="default message";


  private _parent: any ;
  private fonction:FunctionApp=new  FunctionApp();
  private fnDesc:string;
  private fnUrl:string;
  private fnNom: string;
  private fnNomEng: string;
  private select= false;
  private update=false;
  private delete=false;
  private add=false;
  constructor(
    private appFunctionService:AppFunctionService,
                           private dialogRef: MatDialogRef<AddFunctionComponent>
                          ) { 

    }

  ngOnInit() {
    this.appFunctionService.getAllFunction().subscribe(res => this._parent= res)
    this.appFunctionService.currentMessage.subscribe(message=>this.message=message);
  }

 
    
  

  selectParent:String='Parent';
  onChangeParent(newValue) {
    let i=0;
    let ok=false;
    while(i<this._parent.length && !ok){
      if(this._parent[i].applicationId==newValue){
        ok=true;
      }else{
        i++;
      }
    }
    if(ok){
    this.fonction.applicationId=this._parent[i].applicationId;
    }else{
      this.fonction.applicationId=null;
    }
}


AddFunction(){


this.fonction.select=this.select;
this.fonction.update=this.update;
this.fonction.delete=this.delete;
this.fonction.add=this.add;
this.fonction.description=this.fnDesc;
this.fonction.functionUrl=this.fnUrl;
this.fonction.functionName=this.fnNom;
this.fonction.functionNameEn=this.fnNomEng;


this.appFunctionService.addAppFunction(this.fonction).subscribe(
      res =>{
        this.appFunctionService.changeMessage("ok");
        console.log(res);
      },
      err =>{
        this.appFunctionService.changeMessage("non");
        console.error(err);
      },
       () => console.log('done adding a function') 
    );

}

}
