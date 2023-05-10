import {useState,useEffect} from 'react';

import {subscribe,publish} from './implementation/broker.js';


//***************************************************************

function buildProvider() {
    return (props)=> {
        return (
            <>
                {props.children}
            </>
        );
    };
};

//***************************************************************

function useCounterListener() {
    const [counter,update] = useState(undefined);

    useEffect(() => {
        function handle(result) {
            update(result);
        }
        let unsubscribe = subscribe(handle);
        return ()=> {
            unsubscribe();
        }
    },[]);

    return counter;
};


function useCounterDispatcher() {
    return () => {
        publish();
    };
};

//***************************************************************



export {buildProvider,useCounterListener,useCounterDispatcher}