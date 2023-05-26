import { useContext } from "react";
import { AuthContext } from "../poviders/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const AddToy = () => {
  const { user } = useContext(AuthContext)
  // console.log(user.displayName);
  const handelAddToy = (event) => {
    event.preventDefault();
    const formData = event.target;
    const name = user?.displayName;
    const email = user?.email;
    const toyName = formData.toy.value;
    const toyCategory = formData.category.value;
    const toyPrice = formData.price.value;
    const toyQuantity = formData.quantity.value;
    const toyImage = formData.picture.value;
    const toyDescription = formData.description.value;
    const rating = formData.rating.value



    const newToy = {
      seller_name: name,
      seller_email: email,
      name: toyName,
      sub_category: toyCategory,
      price: toyPrice,
      available_quantity: toyQuantity,
      picture_url: toyImage,
      rating: rating,
      description: toyDescription
    }
    console.log(newToy);
    fetch('https://children-toy-server.vercel.app/alltoys', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newToy)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'user add',
            confirmButtonText: 'cool'
          })
        }
      })
  }


  return (
    <div className="container mx-auto p-4 ">
      <Helmet>
        <title>KIDS Super Car|Add Toy</title>
      </Helmet>
      <form onSubmit={handelAddToy} className="max-w-lg mx-auto border-2 bg-slate-500 border-gray-900 rounded-lg p-5">
        <div className="mb-4">
          <label htmlFor="name" className="block font-black text-lg  text-gray-900">Seller Name</label>
          <input type="text" id="name" name="name" defaultValue={user?.displayName} className="mt-1 p-2  focus:ring-blue-500 focus:border-blue-500 block w-full shadow-lg sm:text-sm rounded-md" />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block font-black text-lg  text-gray-900">Seller Email</label>
          <input type="email" id="email" name="email" defaultValue={user?.email} className="mt-1  p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>

        <div className="mb-4">
          <label htmlFor="seller-name" className="block font-black text-lg  text-gray-900">Toy Name</label>
          <input type="text" id="seller-name" name="toy" className="mt-1  p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block font-black text-lg  text-gray-900">Category</label>
          <input type="text" id="category" name="category" className="mt-1  p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block font-black text-lg  text-gray-900">Price</label>
          <input type="number" id="price" name="price" min="0" className="mt-1 p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block font-black text-lg  text-gray-900">Quantity</label>
          <input type="number" id="quantity" name="quantity" min="0" className="mt-1  p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>

        <div className="mb-4">
          <label htmlFor="rating" className="block font-black text-lg  text-gray-900">Rating</label>
          <input type="number" id="rating" name="rating" min="1" max="5" className="mt-1  p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>

        <div className="mb-4">
          <label htmlFor="picture" className="block font-black text-lg  text-gray-900">Picture</label>
          <input type="URl" id="picture" name="picture" className="mt-1  p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block font-black text-lg  text-gray-900">Description</label>
          <textarea id="description" name="description" rows="3" className="mt-1  p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
        </div>

        <div className="flex items-center justify-end mt-6">
          <button type="submit" className="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Submit
          </button>
        </div>
      </form>
    </div>

  );
};

export default AddToy;