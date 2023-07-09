import { User } from "./user";

export interface Role{
    id:number;
    roleName:string;

    usersList:Array<User>
  
  }