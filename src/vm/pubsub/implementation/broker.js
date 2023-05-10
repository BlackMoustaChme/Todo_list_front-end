import Solver from '../../../domain/solver.js';

//import {giveCurrentValue as giveCurrentValueFromStore, publish as publishInStore, subscribe as subscribeToStore} from './store/simple/api.js'
//import {giveCurrentValue as giveCurrentValueFromStore, publish as publishInStore, subscribe as subscribeToStore} from './store/redux/api.js'
import {giveCurrentValue as giveCurrentValueFromStore, publish as publishInStore, subscribe as subscribeToStore} from './store/mobx/api.js'

export async function publish() {
    const counterCurrent = giveCurrentValueFromStore();

    const solver = new Solver();
    const counterNew = await solver.solve(counterCurrent);

    publishInStore(counterNew);
};


export function subscribe(sub) {
    return subscribeToStore(sub);
};