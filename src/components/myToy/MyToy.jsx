import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../poviders/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyToy = () => {

  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [asc,setAsc] = useState(true);
  useEffect(() => {
    fetch(`https://children-toy-server.vercel.app/mytoy/${user?.email}?sort=${asc? 'asc': 'desc'}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user,asc]);


  const handelDelete = id => {
    console.log(id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://children-toy-server.vercel.app/mytoy/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )

              const reamining = toys.filter(toy => toy._id !== id)
              setToys(reamining)

            }
          })


      }
    })
  }

  const itemElements = toys.map((item, index) => (
    <tr key={index}>
      <th>{index + 1}</th>
      <td>{item.name}</td>
      <td>{item.sub_category}</td>
      <td>{item.price}</td>
      <td>{item.available_quantity}</td>
      <td>{item.description.slice(0, 20)}...</td>
      <td><Link to={`edittoy/${item._id}`}><button className="btn bg-cyan-600">Edit</button></Link>
      </td>
      <td><button onClick={() => handelDelete(item._id)} className="btn bg-red-800">Delete</button></td>
    </tr>
  ));




  return (
    <div>
      <Helmet>
        <title>KIDS Super Car|My Toy</title>
      </Helmet> 

      <div className="container mx-auto flex justify-center items-center pb-4">
      <button onClick={()=> setAsc(!asc)} className="btn btn-wide">{asc ? 'Price: High to Low' : 'Price: Low to High '}</button>
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
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>

            {itemElements}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;