import { Dispatch, SetStateAction } from "react"
import existError from "./Msg.controllers";
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

const Login = async (user: any, setUser: Dispatch<SetStateAction<string | object> >,setError?: Dispatch<SetStateAction<string | object> >): Promise<string | void | any[]> => {
    try {
        const {username,password} = user
        const response = await toFetchPOST('http://localhost:3000/login', {username,password});
        const objectResp = await response.json()
        if(await objectResp?.token){
            setUser({
                ...user,
                isLogged: true,
                password:"",
                ...objectResp
            })
            return "logeado"
        }
        setError?.(`${objectResp.message}`)
        return [... objectResp?.errors]
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
            Login(user, setUser)
        }
        setError([...objectResp1.errors])
        setTimeout(() =>{setError([])},6000)
    } catch (error) {
        return error
    }
}


export const diccionaryLog = {
    "iniciar sesion": Login,
    "registrarse":SingIn,
    "si existe Error": existError
}