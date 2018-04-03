import { RoleFunction } from "./role-function";
import { UserApp } from "./user-app";

export class RoleApp{
    roleId:number;
    applicationId:number;
    roleName:string;
    description:string;
    isAnonymous:Boolean;
    loweredRoleName:string;
}