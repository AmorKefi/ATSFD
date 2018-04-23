import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import {
    UserService
} from '../../gestion_acces/login/user.sercice';
@Directive({
    selector: '[HasAnyAuthority]'
})
export class HasAnyAuthorityDirective implements OnInit{
  
    private authorities: string[];
    private userAuthorities:String[];
    //private authenticated = false;
    constructor( private userService: UserService, private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
    }
    ngOnInit(): void {
         
    }

    @Input()
    set HasAnyAuthority(value: string|string[]) {
        this.authorities = typeof value === 'string' ? [ <string> value ] : <string[]> value;
        this.updateView();
        // Get notified each time authentication state changes.
        //this.principal.getAuthenticationState().subscribe((identity) => this.updateView());
    }

    private updateView(): void {
        this.hasAnyAuthority().then((result) => {
            this.viewContainerRef.clear();
            if (result) {
                this.viewContainerRef.createEmbeddedView(this.templateRef);
            }
        });

        
    }

    hasAnyAuthority(): Promise<boolean> {
        return Promise.resolve(this.hasAnyAuthorityDirect());
    }


    hasAnyAuthorityDirect(): boolean {
       // console.log(this.authorities);
         let x=this.userAuthorities=this.userService.getAuthorities();
         if(this.authorities.length>0){
        for (let i = 0; i < this.authorities.length; i++) {
            if(this.userService.getAuthorities().some(el => el.authority === this.authorities[i])){
                return true;
            } 
        
        }
       }
        return false;
    }
}