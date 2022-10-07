import { FaArrowRight} from "react-icons/fa"
import { useNavigate } from "react-router-dom"

export default function Home1(props) {
    const navigate=useNavigate()

    return (
        <>
            <div className=" flex mt-10 ml-5">
                <h1 className="text-5xl font-bold  ">
                    Popular Movie
                </h1>
                <button className="ml-auto mr-5 flex text-red-600 mt-5">
                    See All Movie <FaArrowRight className="mt-1 ml-5"></FaArrowRight>
                </button>
            </div>

            <div class="grid grid-cols-4 mt-5 w-full">
                {
                    props.data?.results?.map((data)=>{
                        return <div key={data.id} className="hover:cursor-pointer" onClick={() => {
                            navigate("/" + data.id)
                        }}><img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} className="rounded-lg w-10/12 ml-6 mt-6" alt=""/></div>
                    })
                }
                
            </div>
    
        </>
    )
}