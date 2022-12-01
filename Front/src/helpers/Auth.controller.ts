import { Dispatch, SetStateAction } from "react"
import existError from "./Msg.controllers";
interface User {
    isLogged: boolean,
    username?: string,
    password?: string,
    email?: string,
    token?: string
}
const toFetchPOST = async (url: string, body: object): Promise<any> => {
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

const getUser1 = async (token: string) => {
    try {
        if (token?.length >= 5) {
            let myHeaders = new Headers();
            myHeaders.append("Authorization", token);

            let requestOptions: object = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            let response = await fetch("http://localhost:3000/user", requestOptions)
            let responseObject = await response.json()
            return responseObject
        }
    } catch (error) {
        return ""
    }
}

const Login = async (user: User, setUser: Dispatch<SetStateAction<string | User>>, setError?: Dispatch<SetStateAction<string | object>>): Promise<string | void | any[]> => {
    try {
        const { username, password } = user
        const response = await toFetchPOST('http://localhost:3000/login', { username, password });
        const objectResp = await response.json()
        if (objectResp?.token) {
            setUser({
                ...user,
                isLogged: true,
                password: "",
                ...objectResp /* {token:"dslñaokjfn'    	2938hrn23orfnmdsñ{lf asdf awskmdfl23.4-,2341"} */
            })
            localStorage.setItem('token', objectResp.token)
            return "logeado"
        }
        setError?.(`${objectResp.message}`)
        return [...objectResp?.errors]
    } catch (error) {
        return ""
    }
}

const SingIn = async (user: User, setUser: Dispatch<SetStateAction<string | User>>, setError: Dispatch<SetStateAction<string | object>>): Promise<string | void> => {
    try {
        const { username, email, password } = user
        const response1 = await toFetchPOST('http://localhost:3000/user/register', { username, email, password });
        const objectResp1 = await response1.json();
        // console.log(objectResp1.errors)
        if (!objectResp1?.errors) {
            Login(user, setUser)
        }
        setError([...objectResp1.errors])
        setTimeout(() => { setError([]) }, 6000)
    } catch (error) {
        return error
    }
}


const autoLogin = async (user: User, setUser: Dispatch<SetStateAction<string | User>>) => {
    try {
        const tokenLocal = localStorage.getItem('token') ?? ""
        const response = await getUser1(tokenLocal)
        if (response?.user) {
            setUser({
                ...user,
                ...response.user,
                isLogged: true
            })
            return "auto logeado"
        }

    } catch (error) {
        return ""
    }
}
const logOut = (event:Event,setUser: Dispatch<SetStateAction<string | User>>) => {
    event.preventDefault();
    setUser({
        isLogged:false
    });
    localStorage.clear()
}
export const diccionaryLog = {
    "iniciar sesion": Login,
    "cerrar sesion":logOut,
    "registrarse": SingIn,
    "si existe Error": existError,
    "autologin si existe token": autoLogin
}