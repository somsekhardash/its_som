import { useState, useEffect } from "react";
import fireBaseObj from './../auth/firebase';

// export const sections = [
//     "about",
//     "experience",
//     "education",
//     "skills",
//     "interests",
//     "awards"
// ]



const UseFireBase = (url: string): [boolean, any, any] => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null);

    const _getDataCall = (url: string) => {
        return new Promise((resolve, reject) => {
            return fireBaseObj.db.ref(`${url}`).on('value', (snapshot: any) => {
                resolve(snapshot.val() || {});
            });
        });
    };

    useEffect(() => {
        _getDataCall(url).then((value: any) => {
            console.log(value);
            setData(value);
            setIsLoading(false);
        });
    }, [])


    // const data = {"about":{},"experience":{},"education":{},"skills":{},"interests":{},"awards":{}};

    // fireBaseObj.db.ref(`${url}`).on('value', (snapshot: any) => {
    //     console.log(snapshot.val());
    //     setData({[url]: snapshot.val()||{}});
    //     setIsLoading(false);
    // });


    return [isLoading, data, error];
}

export default UseFireBase;