import {useEffect, useState} from "react";
import {loadAuthProducts, refresh} from "../services/api.services";
import {IProduct} from "../models/IProduct";


const AuthResourcesPage = () => {
    const[products,setProducts] = useState<IProduct[]>([]);
    useEffect( () =>{
        loadAuthProducts()
            .then(products => {
            if(products){
                // setProducts(prevState => products)
                setProducts(products)
            }

        })
            .catch(reason => {
                console.log(reason)
                    refresh()
                    .then(value => loadAuthProducts())
            })

        return () => {
            console.log('useEffect don his work ')
        }


    },[])


    return(
        <div>
            {
                JSON.stringify(products)
            }
        </div>
    )
}

export default AuthResourcesPage;