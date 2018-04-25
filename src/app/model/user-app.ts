import { RoleApp } from "./role-app";
import { SFD } from "./SFD";

export class UserApp{
    id:number;
    ssoId:string;
    password:string;
    firstName:string;
    lastName:string;
    email:string;
    image:string;
    roles:Array<RoleApp>;
    statut:string;
    sfd:SFD;
    pdv:any;
}