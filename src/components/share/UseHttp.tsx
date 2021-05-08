import { useState, useEffect } from "react";

const useHttp = (): [boolean,any,any, (url: string, body:any) => void] => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null);

    const makeCall = (url: string, body: any) => {
        (body.method == 'PUT') &&
           window.localStorage.setItem(url, body.body);
        
        // console.log(body.body);   
        fetch(url,{...body})
            .then((res: any)=>res.json())
            .then((result: any)=> {
                setIsLoading(false);
                setData(result);
        }).catch((err:any) => {
            setError(err);
        })
    };

    const getFromLocalHost = (url: string) => {
        setIsLoading(false);
        setData(JSON.parse(window.localStorage.getItem(url)||""));
    };

    const makeTheCall = (url: string, body: any) => {
        setIsLoading(true);
        if(body.method == 'PUT') 
            makeCall(url,body)
        else
            localStorage[url] ? getFromLocalHost(url) : makeCall(url,body);
    }

    return [isLoading, data, error, makeTheCall];
}

export default useHttp;