import { Component, OnInit } from '@angular/core';
import { AppUserService } from '../../gestion_acces/app-user/app-user.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddResponsableComponent } from './add-responsable/add-responsable.component';
import { DeleteUserDialogComponent } from '../../gestion_acces/app-user/delete-user-dialog/delete-user-dialog.component';
import { ModifResponsableComponent } from './modif-responsable/modif-responsable.component';

@Component({
  selector: 'app-responsables-pdv',
  templateUrl: './responsables-pdv.component.html',
  styleUrls: ['./responsables-pdv.component.scss']
})
export class ResponsablesPdvComponent implements OnInit {

  data:any;
 layout='Activé';
  constructor( private userservice: AppUserService, private dialog: MatDialog) { }

  ngOnInit() {
   
    this.userservice.getAllResponsables().subscribe(
      res =>{ this.data=res;
 
      
      console.log(res)},
      err => console.error(err),
      () => console.log('done loading all app-roles') 
    );
  }
  
  getDesactivated(){
    if(this.layout=='Activé'){
      this.layout='Desactivated';
      this.userservice.getDesactivatedResponsables().subscribe(res=>this.data=res,err=>console.log(err));
    }else{
      this.layout='Activé';
      this.ngOnInit();
    }
    }
    modifier(event){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.height='480px';
      dialogConfig.width='650px';
      dialogConfig.data = {app_user:event};
      this.dialog.open(ModifResponsableComponent, dialogConfig);
      this.dialog.afterAllClosed.subscribe(res=>{
       this.ngOnInit(); 
       });




    }
    ajouter(){

      const dialogConfig = new MatDialogConfig();
      dialogConfig.height='480px';
      dialogConfig.width='650px';
      this.dialog.open(AddResponsableComponent, dialogConfig);
      this.dialog.afterAllClosed.subscribe(res=>{
       this.ngOnInit(); 
       });

    }
    Desactivate(event){

      const dialogConfig = new MatDialogConfig();
      // console.log("nooooooooooooooccccccchhhhhhh");
      // console.log(event);
      dialogConfig.data = {app_role:event};
      dialogConfig.height='200px';
      dialogConfig.width='350px';
      this.dialog.open(DeleteUserDialogComponent, dialogConfig);


    }
    Activer(event){
      this.userservice.ActiverUser(event).subscribe(res=>this.ngOnInit(),err=>console.log(err));

    }
}
