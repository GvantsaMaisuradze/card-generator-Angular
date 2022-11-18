export class Card {
    public imageUrl:string ="";
    public name:string = "";
    public surname:string = "";
    public email:string = "";
    public age:string ="";
    public dateOfBirth:string = "";


    constructor(imageUrl:any,name:any,surname:any,
        email:any,age:any,dateOfBirth:any){
            this.imageUrl = imageUrl;
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.age = age;
            this.dateOfBirth = dateOfBirth;
    }
}