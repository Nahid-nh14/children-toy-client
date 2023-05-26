import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";


const ToyDetail = () => {
    <Helmet>
        <title>KIDS Super Car|Toy Detail</title>
    </Helmet>
    const data = useLoaderData()
    const { seller_name, seller_email, picture_url, name, price, description, rating, available_quantity } = data
    console.log(data);
    return (
        <div className="flex items-center justify-center py-5">
            <div className="card w-1/2 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10"><img className="h-96 w-full" src={picture_url} alt="Shoes" /></figure>
                <div className="card-body ">
                    <div className="card-body flex items-center">
                        <h2 className="card-title">
                            Toy name: {name}
                        </h2>
                    </div>
                    <div>
                        <p>
                            Seller Name: {seller_name}
                        </p>
                        <p>
                            Seller Email: {seller_email}
                        </p>
                    </div>
                    <div className="card-actions flex md:flex-row justify-around pt-5">
                        <div className="badge badge-outline">Price: {price} </div>
                        <div className="badge badge-outline">Rating: {rating}  </div>
                        <div className="badge badge-outline">Quantity: {available_quantity}  </div>
                    </div>
                    <div>
                        <p className="py-5">
                            Description: {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetail;