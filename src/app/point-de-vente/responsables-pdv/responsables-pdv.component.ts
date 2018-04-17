import { Component, OnInit } from '@angular/core';
import { AppUserService } from '../../gestion_acces/app-user/app-user.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddResponsableComponent } from './add-responsable/add-responsable.component';
import { DeleteUserDialogComponent } from '../../gestion_acces/app-user/delete-user-dialog/delete-user-dialog.component';

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
    modifier(){





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
    sortBy(t){
      this.userservice.sortBy(t.value).subscribe(res=>this.data=res,err=>console.log(err));
    }
}
