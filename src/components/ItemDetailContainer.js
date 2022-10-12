import React, { useEffect, useState } from "react";
import {doc, getDoc, getFirestore} from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer =() => {

    const [product , setProduct] = useState({});
    const {idItem} = useParams();

    useEffect(() =>{
        const db= getFirestore();
        const refDoc = doc(db,"products",idItem)
       

            getDoc(refDoc).then((item) => {
                const aux = {
                ...item.data(),
                id: item.id,
                };

            setProduct(aux);

             });

            }, []);
            return<div className="detailContainer"><ItemDetail product={product}/></div>;
}


export default ItemDetailContainer ;