import { observable } from 'mobx'

const alertObservable = observable({
    active: false,
    toggle() {
        alert.active = !alert.active
    },
    privateId:1,
    title: 'Alert',
    get getPrivateId() {
        return alert.privateId
    },
});

export default alertObservable;
