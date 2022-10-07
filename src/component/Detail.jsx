import { FaSearch,FaPlayCircle, FaStar } from "react-icons/fa"
import './Detail.css'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { API_KEY } from "../util/constant"

export default function Detail(){
    const params = useParams();
    const [detail, setDetail] = useState({})

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/' + params.id, {
                headers: {
                    "Authorization": "Bearer " + API_KEY
                }
            })
            .then((resp)=>{
                setDetail(resp.data)
                console.log("Ini response:" + resp)
            })
            .catch((err)=>{
                console.log("Ini error:" + err)
            })
    }, [])

    return(
        <>  
            <div className="bg-center h-full" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${detail.poster_path})`, backgroundSize: "100% auto" }}>
                <div className="">
                    <div className="w-full flex relative ml-5">
                        <h1 className="text-red-600 text-5xl font-bold"> Movielist</h1>
                        <div className="border-2 flex-auto border-rose-600 rounded-full w-2/5 ml-60 flex px-5">
                            <input className=" bg-transparent focus:outline-0 w-full border-0 outline-0 h-full border-0 placeholder:text-white" type="text" placeholder="what do you want to watch?" />
                            <button className="ml-auto  text-white">
                                <FaSearch />
                            </button>
                        </div>
                        <button className="ml-44 w-1/12 border-2 rounded-full border-rose-600 text-white"> Login</button>
                        <button className="ml-5 mr-5 bg-red-600 rounded-full w-1/12 "> Register</button>
                    </div>

                    <div className="flex flex-col h-68 w-5/12 mt-64 ml-5">
                        <div className="mt-auto">
                            <h1 className="text-5xl text-white">
                                {
                                    detail.original_title
                                }
                            </h1>
                        </div>
                        <div className="text-white">
                            {
                                detail.overview
                            }
                        </div>

                        <div className="text-white flex mt-5">
                            <FaStar size={30} className=" " style={{color:'#eab308'}}/>
                            <span className="text-2xl ml-2 my-auto">{detail.popularity}</span>
                        </div>

                        <div className="mb-auto flex mt-10">
                            <button className="bg-red-600 rounded-full w-1/3 h-14 flex items-center" >
                                <FaPlayCircle size={30} className="ml-2  text-white" />
                                <span className="text-lg ml-5 text-white">Watch Trailer</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}