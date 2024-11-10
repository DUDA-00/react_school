import {useEffect} from "react";
import {login} from "../services/api.services";


const LoginPage = () => {

    useEffect( ()=>{
   login({
       username: 'Dyda',
       password: 'qwerty',
       expiresInMins: 1

   }).then(value => console.log(value))
    },
        [])

    return(
        <div>

        </div>
    )
}

export default LoginPage;