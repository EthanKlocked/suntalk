//------------------------------ MODULE --------------------------------
import { useState, useEffect } from  'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

//----------------------------- FUNCTION -------------------------------
export default function useStorage(key = 'any'){
    //state
    const [ value, setValue ] = useState('init');

    //effect
    useEffect(() => {
        AsyncStorage.getItem(key).then((v) => setValue(v));
    }, []);

    //return
    return value;
}