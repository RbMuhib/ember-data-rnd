import Component from '@ember/component';
import { inject as service } from '@ember/service'

export default Component.extend({
    store: service(),
    data:[],

    init() {
        this._super(...arguments);
        let head = this.get('store').peekAll('person');
        for(let i=0; i<head.length ; i++){
            let rowInfo={
                pid: head._objects[i]._internalModel.__recordData._attributes.pid,
                fname: head._objects[i]._internalModel.__recordData._attributes.firstname,
                lname: head._objects[i]._internalModel.__recordData._attributes.lastname,
                age: head._objects[i]._internalModel.__recordData._attributes.age,
                email: head._objects[i]._internalModel.__recordData._attributes.email,
            }
            this.data.pushObject(rowInfo);
        }

    },
    actions:{
        editAction(){
            console.log("edit click");
        },
        deleteAction(value){
            console.log(value.pid);

            this.get('store').peekRecord('person', value.pid, { backgroundReload: false }).then(function(post) {
                post.destroyRecord(); 
              });
        },
    }
});
