import { Component, OnInit } from '@angular/core';
import { AppUserService } from '../../../gestion_acces/app-user/app-user.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ModifResponsableComponent } from '../../../point-de-vente/responsables-pdv/modif-responsable/modif-responsable.component';
import { AddResponsableComponent } from '../../../point-de-vente/responsables-pdv/add-responsable/add-responsable.component';
import { DeleteUserDialogComponent } from '../../../gestion_acces/app-user/delete-user-dialog/delete-user-dialog.component';
import { AddAdminSfdComponent } from '../add-admin-sfd/add-admin-sfd.component';
import { ModifAdminsfdComponent } from '../modif-adminsfd/modif-adminsfd.component';

@Component({
  selector: 'app-gestion-admin-sfd',
  templateUrl: './gestion-admin-sfd.component.html',
  styleUrls: ['./gestion-admin-sfd.component.scss']
})
export class GestionAdminSfdComponent implements OnInit {
  data:any;
  layout='Activé';
   constructor( private userservice: AppUserService, private dialog: MatDialog) { }
 
   ngOnInit() {
    
     this.userservice.getAllAdminSFD().subscribe(
       res =>this.data=res,
       err => console.error(err),
       () => console.log('done loading all app-roles') 
     );
   }
   
   getDesactivated(){
     if(this.layout=='Activé'){
       this.layout='Desactivated';
       this.userservice.getDesactivatedAdminSFD().subscribe(res=>this.data=res,err=>console.log(err));
     }else{
       this.layout='Activé';
       this.ngOnInit();
     }
     }
     modifier(event){
       const dialogConfig = new MatDialogConfig();
       dialogConfig.height='auto';
       dialogConfig.width='650px';
       dialogConfig.data = event;
     this.dialog.open(ModifAdminsfdComponent, dialogConfig);
       this.dialog.afterAllClosed.subscribe(res=>{
        this.ngOnInit(); 
        });
 
 
 
 
     }
     ajouter(){
 
       const dialogConfig = new MatDialogConfig();
       dialogConfig.height='auto';
       dialogConfig.width='650px';

      this.dialog.open(AddAdminSfdComponent,dialogConfig);
       this.dialog.afterAllClosed.subscribe(res=>{

        this.ngOnInit(); 
        });
 
     }
     Desactivate(event){
 
       const dialogConfig = new MatDialogConfig();
       // console.log("nooooooooooooooccccccchhhhhhh");
       // console.log(event);
       dialogConfig.data = {app_role:event};
       dialogConfig.height='auto';
       dialogConfig.width='350px';
       this.dialog.open(DeleteUserDialogComponent, dialogConfig);
 
 
     }
 
     sortBy(t){
       if(t.value==""){
         this.ngOnInit();
       }else{
       this.userservice.sortBy(t.value).subscribe(res=>this.data=res,err=>console.log(err));
     }
     }
    
     Activer(event){
       this.userservice.ActiverUser(event).subscribe(res=>this.ngOnInit(),err=>console.log(err));
     }

}
