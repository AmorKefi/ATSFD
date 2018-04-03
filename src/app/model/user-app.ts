import { RoleApp } from "./role-app";

export class UserApp{
    id:number;
    ssoId:string;
    password:string;
    firstName:string;
    lastName:string;
    email:string;
    image:string;
    roles:Array<RoleApp>;
}