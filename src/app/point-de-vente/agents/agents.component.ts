import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material';
import { AppUserService } from '../../gestion_acces/app-user/app-user.service';
import { DeleteUserDialogComponent } from '../../gestion_acces/app-user/delete-user-dialog/delete-user-dialog.component';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { ModifAgentComponent } from './modif-agent/modif-agent.component';


@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit {
  data:any;
  layout='Activé';
   constructor( private userservice: AppUserService, private dialog: MatDialog) { }
 
   ngOnInit() {
    
     this.userservice.getAllAgents().subscribe(
       res =>{ this.data=res;
  
       
       console.log(res)},
       err => console.error(err),
       () => console.log('done loading all app-roles') 
     );
   }
   
   getDesactivated(){
     if(this.layout=='Activé'){
       this.layout='Desactivated';
       this.userservice.getDesactivatedAgent().subscribe(res=>this.data=res,err=>console.log(err));
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
      
       this.dialog.open(ModifAgentComponent, dialogConfig);
       this.dialog.afterAllClosed.subscribe(res=>{
        this.ngOnInit(); 
        });
 
 
 
 
     }
     ajouter(){
 
       const dialogConfig = new MatDialogConfig();
       dialogConfig.height='auto';
       dialogConfig.width='650px';

      this.dialog.open(AddAgentComponent,dialogConfig);
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
