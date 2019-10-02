import Component from '@ember/component';
import { inject as service } from '@ember/service'
import person from '../models/person';

export default Component.extend({
    store: service(),
    router: service(),
    data: [],

    init() {
        this._super(...arguments);
        this.loadData();

    },
    loadData() {
        let head = this.get('store').peekAll('person');
        for (let i = 0; i < head.length; i++) {

            let rowInfo = {
                id: head._objects[i]._internalModel.__recordData.id,
                fname: head._objects[i]._internalModel.__recordData._attributes.firstname,
                lname: head._objects[i]._internalModel.__recordData._attributes.lastname,
                age: head._objects[i]._internalModel.__recordData._attributes.age,
                email: head._objects[i]._internalModel.__recordData._attributes.email,
            }

            this.data.pushObject(rowInfo);
        }
        console.log(this.data[0]);

    },
    actions: {
        editAction() {
            console.log("edit click");
        },
        deleteAction(value) {
            console.log(value.id);
            let context = this;
            //context.get('store').unloadRecord(value.id);
            //person.unloadRecord();
            //context.get('store').unloadAll(value.id)
            let store = this.get('store');
            let post = store.peekRecord('person', value.id);
            if (post) {
                store.unloadRecord(post);
            }
            
        },
    }
});
