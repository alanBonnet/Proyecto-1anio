import { Dispatch, SetStateAction } from "react"

const toFetchPOST = async (url: string, body: object):Promise<any> => {
    try {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify(body);

        let requestOptions: object = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        const response = await fetch(url, requestOptions)
        return response
    } catch (error) {
        return error
    }
}

const Login = async (user: object, setUser: Dispatch<SetStateAction<string | object> >): Promise<string | void> => {
    try {
        const response = await toFetchPOST('http://localhost:3000/login', user);
        const objectResp = await response.json()
        setUser({
            ...user,
            isLogged: true,
            password:"",
            ...objectResp
        })
    } catch (error) {
        return error
    }
}

const SingIn = async (user: object, setUser: Dispatch<SetStateAction<string | object> >,setError:Dispatch<SetStateAction<string | object> >): Promise<string | void> => {
    try {
        const response1 = await toFetchPOST('http://localhost:3000/user/register', user);
        const objectResp1 = await response1.json();
        console.log(objectResp1.errors)
        if(!objectResp1?.errors){
            const response = await toFetchPOST('http://localhost:3000/login', user);
            const objectResp = await response.json();
            console.log(objectResp)
            setUser({
                ...user,
                isLogged: true,
                password:"",
                ...objectResp
            })
        }
        setError([...objectResp1.errors])
        setTimeout(() =>{setError([])},6000)
    } catch (error) {
        return error
    }
}


export const diccionaryLog = {
    "iniciar sesion": Login,
    "registrarse":SingIn
}