import { Component, OnInit, Inject } from '@angular/core';
//import { UserApp } from '../../model/user-app';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {  MAT_DIALOG_DATA,MatDialogRef } from '@angular/material';
//import { RoleApp } from '../../model/role-app';

import { resolve } from 'q';
import { UserApp } from '../../../model/user-app';
import { RoleApp } from '../../../model/role-app';
import { Router } from '@angular/router';

import { AppUserService } from '../../../gestion_acces/app-user/app-user.service';
import { AppRoleService } from '../../../gestion_acces/app-role/app-role.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-modif-responsable',
  templateUrl: './modif-responsable.component.html',
  styleUrls: ['./modif-responsable.component.scss']
})
export class ModifResponsableComponent implements OnInit {
  public form: FormGroup; // our model driven form
  public submitted: boolean; // keep track on whether form is submitted
  public events: any[] = []; // use later to display form changes
  private user:UserApp=new UserApp();// the new user
  private role:RoleApp;
  private _roles:Array<RoleApp>=new Array<RoleApp>();//list of the existing roles
  private idNewRole:number;// id of the selected role
  private userRoles:Array<RoleApp>=new Array<RoleApp>();// the new use roles
  private roleList:string='List des Roles';



  constructor(private appRoleService:AppRoleService,
              private appUserService:AppUserService,
              private _fb: FormBuilder,
              private route:Router,
              private dialogRef: MatDialogRef<ModifResponsableComponent>,
             @Inject(MAT_DIALOG_DATA) public data) { 
                //this.user.roles=new Array<RoleApp>();
              }

              getAllDesactives(){

                // this.route.navigate(['UsersDesactives']);
                
                
                
                 }
                

  ngOnInit() {
     this.form = this._fb.group({
               ssoId: [this.data.ssoId, [<any>Validators.required]],
             password: [this.data.password, [<any>Validators.required]],
               lastName: [this.data.lastName, [<any>Validators.required]],
               firstName: [this.data.firstName, [<any>Validators.required]],
              email: [this.data.email, [<any>Validators.required,<any>Validators.email]],
              statut:this.data.statut,
              role:this.data.role
           
       });  

    
  }
  
 modifier(model: UserApp) {
    this.submitted = true; 
    this.data.ssoId=model.ssoId;
    this.data.password=model.password;
    this.data.firstName=model.firstName;
    this.data.lastName=model.lastName;
    this.data.email=model.email;
    this.data.image=model.image;
    this.data.statut=model.statut;
  this.user.roles=new Array<RoleApp>();
   this._roles.map(x=>this.data.roles.push(x));
console.log(this.data);
 this.appUserService.updateReponsable(this.data).subscribe(
    res=>{
      console.log('ok0');
      console.log(res);
     let div= document.getElementById('Message');
     div.classList.add('animate');
     div.classList.remove('red','accent-1');
     div.classList.add('rgba-green-light','animate');
     div.innerHTML="Le responsable est modifié avec succés !";
     setInterval(function(){
       div.classList.remove('animate');
     },4000)
     this.dialogRef.close()},
    err => {
      this.dialogRef.close();
      let div= document.getElementById('Message');
      div.classList.remove('rgba-green-light');
      div.classList.add('red','accent-1','animate');
      div.innerHTML="le responsable n'a pas été ajouté !"
      setInterval(function(){
        div.classList.remove('animate');
      },4000)
    },
    ()=>console.log('we updated the user => '+ model)
  )
}
}
