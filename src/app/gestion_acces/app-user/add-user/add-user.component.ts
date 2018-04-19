import { Component, OnInit, Inject } from '@angular/core';
//import { UserApp } from '../../model/user-app';
import { AppUserService } from '../app-user.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {  MAT_DIALOG_DATA,MatDialogRef } from '@angular/material';
//import { RoleApp } from '../../model/role-app';
import { AppRoleService } from '../../app-role/app-role.service';
import { resolve } from 'q';
import { UserApp } from '../../../model/user-app';
import { RoleApp } from '../../../model/role-app';
import { Router } from '@angular/router';
import { UserDesactivesComponent } from '../user-desactives/user-desactives.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  public form: FormGroup; // our model driven form
  public submitted: boolean; // keep track on whether form is submitted
  public events: any[] = []; // use later to display form changes
  private user:UserApp=new UserApp();// the new user
  private _roles:Array<RoleApp>=new Array<RoleApp>();//list of the existing roles
  private idNewRole:number;// id of the selected role
  private userRoles:Array<RoleApp>=new Array<RoleApp>();// the new use roles
  private roleList:string='List des Roles';



  constructor(private appRoleService:AppRoleService,
              private appUserService:AppUserService,
              private _fb: FormBuilder,
              private route:Router,
              private dialogRef: MatDialogRef<AddUserComponent>,
              @Inject(MAT_DIALOG_DATA) data) { 
                this.user.roles=new Array<RoleApp>();
    
              }

              getAllDesactives(){

                // this.route.navigate(['UsersDesactives']);
                
                
                
                 }
                

  ngOnInit() {
     this.form = this._fb.group({
               ssoId: ['', [<any>Validators.required]],
             password: ['', [<any>Validators.required,<any>Validators.minLength(5)]],
               lastName: ['', [<any>Validators.required]],
               firstName: ['', [<any>Validators.required]],
              email: ['', [<any>Validators.required,<any>Validators.email]],
              role:''       
       });  
          this.appRoleService.getAllRoles2().subscribe(
           res=>res.map(x=>this._roles.push(x)),
            err => console.error(err),
            () => console.log('done loading all app-roles',) 
          );
  }

  selectParent:String='Parent';
   onChangeRole(value){
    this.idNewRole=value;
    console.log(this.idNewRole);
  }

  addUserRole(){
    let i=0;
    let ok=false;
  
    while(i<this._roles.length && !ok){
      if(this._roles[i].roleId==this.idNewRole){
        ok=true;
      }else{
        i++;
      }
    }
    if(ok){
      
      this.user.roles.push(this._roles[i]);
      this._roles.splice(i,1);
      //console.log(this._roles[i].roleName);
      //for(let j=0;j<this.user.roles.length;j++){
      //  console.log(`user roles ${j} = `+ this.user.roles[j]);
      //}
    }

  }

   save(model: UserApp, isValid: boolean) {
       this.submitted = true; 
   
     this.user.ssoId=model.ssoId;
     this.user.password=model.password;
     this.user.firstName=model.firstName;
     this.user.lastName=model.lastName;
     this.user.email=model.email;
     this.user.image=model.image;
     this.user.statut="Activé";
      console.log(this.user);
   
     //this.user.roles=new Array<RoleApp>();
     //this._roles.map(x=>this.user.roles.push(x));

     this.appUserService.addAppUser(this.user).subscribe(
       res=>{
        let div= document.getElementById('Message');
        div.classList.add('animate');
        div.classList.remove('red','accent-1');
        div.classList.add('rgba-green-light','animate');
        div.innerHTML="Utilisateur ajouter avec succés !";
        setInterval(function(){
          div.classList.remove('animate');
        },4000)
        this.dialogRef.close()},
       err => {
         this.dialogRef.close();
         let div= document.getElementById('Message');
         div.classList.remove('rgba-green-light');
         div.classList.add('red','accent-1','animate');
         div.innerHTML="l'utilisateur n'a pas été ajouté !"
         setInterval(function(){
           div.classList.remove('animate');
         },4000)
       },
       ()=>console.log('we added the user => '+ model)
     )

 }


  
}
