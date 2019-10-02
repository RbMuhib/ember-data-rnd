import Component from '@ember/component';
import {inject as service}  from '@ember/service'
export default Component.extend({

    store: service(), 

    id:"",
    fname:"",
    lname:"",
    age:"",
    email:"",
    actions:{
        save(){
            let context=this;
            let id=this.get("id");
            let name1=this.get("fname");
            let name2=this.get("lname");
            let age=this.get("age");
            let email=this.get("email");
            let model=this.get('store').createRecord('person',{
                id:id,
                firstname:name1,
                lastname:name2,
                age:age,
                email:email
            });
            console.log(model);
    
        }
    }
});
