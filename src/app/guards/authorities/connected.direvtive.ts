import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import {
    UserService
} from '../../gestion_acces/login/user.sercice';
@Directive({
    selector: '[Connected]'
})
export class ConnectedDirective implements OnInit{
  
    private authorities: string[];
    private userAuthorities:String[];
    constructor( private userService: UserService, private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
    }
    ngOnInit(): void {
         
    }

    @Input()
    set Connected(value: string|string[]) {
        if(this.userService.connecte()==false){
            this.viewContainerRef.clear();
        }
        this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  

    


    
}