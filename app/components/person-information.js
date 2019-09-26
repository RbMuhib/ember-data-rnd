import Component from '@ember/component';
import {inject as service}  from '@ember/service'

export default Component.extend({
    init() {
        this._super(...arguments);
        let head=this.store.findAll('person');
        console.log(head);
        store: service(),
        

    }
});
