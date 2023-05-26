import Swal from "sweetalert2";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";


const EditToy = () => {

  const { id } = useParams()
  const datas = useLoaderData()
  const { available_quantity, description, price } = datas
  console.log(datas);


  const handelEdit = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const available_quantity = form.quantity.value;
    const description = form.description.value;
    const UpdateToy = {
      price,
      available_quantity,
      description
    }
      ;
    console.log(price, available_quantity)

    fetch(`https://children-toy-server.vercel.app/updateToy/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(UpdateToy)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Toy update success',
            confirmButtonText: "cool"
          })
        }
      })
  }



  return (
    <div className="container mx-auto p-4 ">
      <Helmet>
        <title>KIDS Super Car|Edit Toy</title>
      </Helmet>
      <form onSubmit={handelEdit} className="max-w-lg mx-auto border-2 bg-slate-500 border-gray-900 rounded-lg p-5">

        <div className="mb-4">
          <label htmlFor="price" className="block font-black text-lg  text-gray-900">Price</label>
          <input type="number" id="price" name="price" min="0" defaultValue={price} className="mt-1  p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block font-black text-lg  text-gray-900">Quantity</label>
          <input type="number" id="quantity" name="quantity" min="0" defaultValue={available_quantity} className="mt-1  p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block font-black text-lg  text-gray-900">Description</label>
          <textarea id="description" name="description" rows="3" defaultValue={description} className="mt-1  p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
        </div>

        <div className="flex items-center justify-around mt-6">
          {/* {
        button?      <button onClick={()=>setButton(false)} type="submit" className="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Update
      </button>:
    <Link to='/mytoy'>      <button type="submit" className="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
      My Toy
    </button></Link>

      } */}
          <button type="submit" className="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Update
          </button>
          <Link to='/mytoy'>      <button type="submit" className="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            My Toy
          </button></Link>
        </div>
      </form>
    </div>
  );
};

export default EditToy;