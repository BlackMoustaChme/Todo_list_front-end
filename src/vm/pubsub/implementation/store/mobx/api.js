import { observable,action,autorun } from 'mobx';

const store = observable({
    counter: 0,

    change: action( function change(value) {
        this.counter = value;
    }),
});



export function giveCurrentValue() {
    return store.counter;
};

export function publish(value) {
    store.change(value);
};

export function subscribe(sub) {
    return autorun( ()=> {
        sub(store.counter);
    });
};
