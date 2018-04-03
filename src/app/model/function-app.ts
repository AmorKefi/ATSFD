import { RoleFunction } from "./role-function";

export class FunctionApp{
      functionId:number;
      description :string;
      functionUrl:string;
      functionName:string;
      applicationId :number;
      select:Boolean;
      update:Boolean;
      delete:Boolean;
      add:Boolean;
      functionNameEn:string;
      //parent: FunctionApp;
      // childs:Array<FunctionApp>;
      // roleFunctions:Array< RoleFunction>;
}