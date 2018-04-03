import { RoleApp } from "./role-app";
import { FunctionApp } from "./function-app";

export class RoleFunction{
    idRoleFunction:number;
    select:Boolean;
    update:Boolean;
    delete:Boolean;
    add:Boolean;
    function:FunctionApp
    role:RoleApp;
}