import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const AllToy = () => {
    const [searchText, setSearchText] = useState()
    const [allToys, setAllToys] = useState([])
    // const allToys = useLoaderData()
    console.log(allToys);

    useEffect(() => {
        fetch(`https://children-toy-server.vercel.app/alltoys`)
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])
    console.log(allToys);
    const handelSearchData = () => {
        fetch(`https://children-toy-server.vercel.app/toySearchByTitle/${searchText}`)
            .then(res => res.json())
            .then(data => setAllToys(data))
    }


    const itemElements = allToys.map((item, index) => (
        <tr key={index}>
            <th>{index + 1}</th>
            <td>{item.name}</td>
            <td>{item.sub_category}</td>
            <td>{item.price}</td>
            <td>{item.available_quantity}</td>
            <td><Link to={`toyDetail/${item._id}`}><button className="btn bg-cyan-600">View Detail</button></Link>
            </td>
        </tr>
    ));


    return (
        <div>
            <Helmet>
                <title>KIDS Super Car|All Toy</title>
            </Helmet>
            <div className="form-control container mx-auto gap-3 my-5 flex flex-row justify-center items-center">
                <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search" className="input input-bordered" />
                <button onClick={handelSearchData} className="btn bg-cyan-600">Search</button>

            </div>

            <div className="container mx-auto overflow-x-auto">
                <table className="table w-full">
                    {/* head*/}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>

                        {itemElements}

                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default AllToy;