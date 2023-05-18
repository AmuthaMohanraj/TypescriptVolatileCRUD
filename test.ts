export{}

class Lstudent{
    id:number;
    name:string;
    age:number;
    isActive:boolean;
}

class student{

    users:Lstudent[];

    constructor(){
      this.users=[
        {id:1,name:'mohan',age:21,isActive:true},
        {id:2,name:'chandru',age:23,isActive:true},
        {id:3,name:'komathi',age:19,isActive:true},
        {id:4,name:'poongodi',age:25,isActive:true},
        {id:5,name:'perumal',age:21,isActive:false}
      ]
    }

    getAllUsersFalseAlso():Lstudent[]{
        return this.users;
    }


    getAllUser():Lstudent[]{    
     const ActiveUsers=this.users.filter(e=>e.isActive===true)
     return ActiveUsers;
    }


    getUserById(userId:number):Lstudent[]{
        const user=this.users.filter(e=>e.id===userId)
        return user;
    }


    editUser(editUserid:number,editedUserSource:Partial<Lstudent>):void{
        console.log("editUserId",editUserId);
         const User=this.users.filter(e=>e.id===editUserId)
             Object.assign(User,editedUserSource)  
    }


    deleteUser(id:number):void{
        const user = this.users.filter(user => {
            if (user.id === id) {
                user.isActive =false;
            }
        });
    }
}

let stdObj=new student();


console.log("getAllUsersFalseAlso",stdObj.getAllUsersFalseAlso());
console.log("getAllUsers",stdObj.getAllUser());
console.log("getUserById",stdObj.getUserById(2));



let editUserId:number=1;
let editUserObject={id:1,name:'mohan',age:12}
stdObj.editUser(editUserId,editUserObject)


stdObj.deleteUser(5);
console.log("getAllUsers",stdObj.getAllUser());


console.log("getAllUsersFalseAlso",stdObj.getAllUsersFalseAlso());
