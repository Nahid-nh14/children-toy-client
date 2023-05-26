import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../poviders/AuthProvider";


const CategoryToy = ({toy}) => {
    const {user} = useContext(AuthContext)
    const { picture_url,name,price,rating,_id}=toy
    const handelButtonClick =()=> {
        if(!user){
            alert("Please Login First")
            return
        }
    }
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className="h-60 w-full" src={picture_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions justify-around my-5">
      <div className="badge badge-outline">Price: {price} TK</div>
      <div className="badge badge-outline">Rating: {rating}</div>
    </div>
                    <div className="card-actions justify-around">
                    <NavLink to={`/toyDetails/${_id}`}><button onClick={handelButtonClick} className="btn btn-wide">View Details</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryToy;