import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaPhabricator } from "react-icons/fa";
import { AuthContext } from '../poviders/AuthProvider';
import { Helmet } from 'react-helmet';
// import { AuthContext } from '../poviders/AuthProvider';


const LogIn = () => {
    // const {signIn} = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handelTogglePassword = () => {
        setShowPassword(!showPassword)
    }
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
                console.log(location);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handelGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }


    return (
        // <div className='container mx-auto'>

        <div className="container mx-auto max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <Helmet>
                <title>KIDS Super Car|LogIn</title>
            </Helmet>
            <form onSubmit={handleLogin} className="space-y-6" action="#">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" id="email" className="input-field" placeholder="name@company.com" required />
                </div>
                <div >
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <div className='input-field flex items-center'>
                        <input className='flex-grow ps-2' type={showPassword ? 'text' : 'password'} name="password" placeholder="••••••••" required />

                        <span onClick={handelTogglePassword}><FaPhabricator className='ms-1'></FaPhabricator></span>
                    </div>
                </div>
                <button type="submit" className="from-button">Login to your account</button>
                <button onClick={handelGoogleSignIn} type="submit" className="from-button flex justify-center items-center"><FaGoogle className='me-1'></FaGoogle><span>Google Sign-in</span></button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered? <Link to='/register' className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
                </div>
            </form>
        </div>

        // </div>
    );
};

export default LogIn;