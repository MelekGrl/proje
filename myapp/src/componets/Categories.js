import { useState,useEffect } from "react";
import categoryData from 'api/categories.json';
import Category from "./ui/Category";



export default function Categories () {

    const [categories,setCategories]=useState([]);
    useEffect(() => {
       //istek
      setTimeout(()=> setCategories(categoryData),1000)
    }, [])


  return (
    <div>
      <div className="bg-w w-full">
        <div className="  flex  flex-col w-full">
           <div className="grid gap-3 grid-cols-1 w-full 2xl:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 sm::grid-cols-2">
            {!categories.length && 'Yükleniyor...' } 
            {categories.length && categories.map((category,index)=>
                <Category key={index} category={category} />)}
           </div>
        </div>
      </div>
    </div>
  )
}


