import Component from '@ember/component';

export default Component.extend({

    fname:"",
    lname:"",
    age:"",
    email:"",
    actions:{
        save(){
            let name1=this.get("fname");
            let name2=this.get("lname");
            let age=this.get("age");
            let email=this.get("email");
            console.log(name1, name2, age, email);
            
        }
    }
});
