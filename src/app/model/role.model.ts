import { RoleFunction } from "./role-function";
import { UserApp } from "./user-app";

export class AppRole{
    roleId:number;
    applicationId:number;
    roleName:string;
    description:string;
    isAnonymous:Boolean;
    loweredRoleName:string;
    //roleFunction={}
    roleFunctions:Array<RoleFunction>;
    users:Array<UserApp>;

    constructor(){
        this.roleFunctions= new Array<RoleFunction>();
        this.users= new Array<UserApp>();
    }
}