

const Footer = () => {
    return (
            <footer className="container mx-auto bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
        <div className="flex items-center justify-center ">
        <div className="flex gap-4">
 <div className='h-20 w-20'>
    <img className='' src="https://cdn.vectorstock.com/i/1000x1000/33/99/kids-toys-logo-vector-21313399.webp" alt="" />
 </div>
 <div>
    <div className='text-4xl font-black'>
        KIDS
    </div>
    <div>
        <span className='font-black text-lg'><small>Super</small></span><br />
        <span className='font-black text-lg'><small>Car</small></span>
    </div>
 </div>


      </div>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-gray-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              {/* Social media icon (e.g., Facebook) */}
            </svg>
          </a>
          <a href="#" className="text-gray-300 hover:text-gray-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              {/* Social media icon (e.g., Twitter) */}
            </svg>
          </a>
          <a href="#" className="text-gray-300 hover:text-gray-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              {/* Social media icon (e.g., Instagram) */}
            </svg>
          </a>
        </div>
        <div className="text-sm">
          <h1 className="font-black">Address</h1>
          <p>123 Street, City, State, ZIP</p>
          <p>Phone: 123-456-7890</p>
          <p>Email: info@example.com</p>
        </div>
      </div>
      <div  className="text-center"><p>&copy; {new Date().getFullYear()} KIDS Super Car. All rights reserved.</p></div>
    </footer>
    );
};

export default Footer;