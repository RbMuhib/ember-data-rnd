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
                id: head._objects[i]._internalModel.__recordData._attributes.id,
                fname: head._objects[i]._internalModel.__recordData._attributes.firstname,
                lname: head._objects[i]._internalModel.__recordData._attributes.lastname,
                age: head._objects[i]._internalModel.__recordData._attributes.age,
                email: head._objects[i]._internalModel.__recordData._attributes.email,
            }
            this.data.pushObject(rowInfo);
        }

    }
});
