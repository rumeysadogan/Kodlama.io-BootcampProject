export interface ICreateApplicantRequestModel{
    id:number;
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    nationalIdentity:number;
    dateOfBirth:string;
    about:string;
    state:number;

}