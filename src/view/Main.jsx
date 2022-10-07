import { useState } from "react";
import Carousel from "../component/Carousel";
import Home1 from "../component/Home1";
import axios from "axios"
import { useEffect } from "react"
import { API_KEY } from "../util/constant"
import Search from "../component/Search";


export default function Main(){

    const[data,setData]=useState([])
    const [search, setSearch] = useState("")
    
    useEffect(()=>{
        if (search === "") {
            axios.get('https://api.themoviedb.org/3/movie/popular', {
                headers: {
                    "Authorization": "Bearer " + API_KEY
                }
            })
            .then((resp)=>{
                setData(resp.data)
                console.log("Ini response:" + resp)
            })
            .catch((err)=>{
                console.log("Ini error:" + err)
            })
        } else {
            axios.get('https://api.themoviedb.org/3/search/movie', {
                headers: {
                    "Authorization": "Bearer " + API_KEY
                },
                params: {
                    query: search
                }
            })
                .then((resp)=>{
                    setData(resp.data)
                    console.log("Ini response:" + resp)
                })
                .catch((err)=>{
                    console.log("Ini error:" + err)
                })
        }
    }, [search])

    return(
        <>
        <Carousel search={search} setSearch={setSearch}/>
        {search !== "" ? <Search search={search} data={data}/> : <Home1 setData={setData} search={search} data={data}/>}
        </>
    )
}