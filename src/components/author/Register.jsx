// import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useContext, useState } from 'react';
import { FaPhabricator } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../poviders/AuthProvider';
import { Helmet } from 'react-helmet';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conPassword, setConPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const [showComPassword, setShowComPassword] = useState(false)
    const [photoUrl, setPhotoUrl] = useState('')
    const [errors, setErrors] = useState('')
    const { createUser } = useContext(AuthContext);

    // const navigate = useNavigate()
    // const location = useLocation()
    // const from = location.state?.from?.pathname || '/'
    // console.log(from,location);

    const handelTogglePassword = () => {
        setShowPassword(!showPassword)
    }
    const handelToggleComPassword = () => {
        setShowComPassword(!showComPassword)
    }

    const handleRegister = event => {
        setErrors('');
        event.preventDefault();

        console.log(password, conPassword)


        if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            setErrors(' one spacial characters ?!@$%^&')
            return
        }
        else if (password !== conPassword) {
            setErrors('Password do not match')
            return
        }
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                updateUserData(createdUser, name, photoUrl)
                console.log(createdUser);
                // navigate(from, { replace: true })
            })
            .catch(error => {
                setErrors(error);
            })


    }

    const updateUserData = (user, name, photoUrl) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photoUrl
        })
            .then(() => {
                console.log('user update')
            })
            .catch(() => {
                setErrors(errors.message)
            })
    }


    return (
        <div className="container mx-auto max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <Helmet>
                <title>KIDS Super Car|Register</title>
            </Helmet>
            <form onSubmit={handleRegister} className="space-y-3" action="#">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                    <input onChange={(event) => setName(event.target.value)} type="text" name="name" value={name} className="input-field block" placeholder="Your name" required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input onChange={(event) => setEmail(event.target.value)} type="email" name="email" className="input-field block" placeholder="name@company.com" required />

                </div>
                <div >
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <div className='input-field flex items-center'>
                        <input onChange={(event) => setPassword(event.target.value)} className='flex-grow' value={password} type={showPassword ? 'text' : 'password'} name="password" placeholder="••••••••" required />

                        <span onClick={handelTogglePassword}><FaPhabricator className='ms-1'></FaPhabricator></span>
                    </div>
                </div>
                <div >
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                    <div className='input-field flex items-center'>
                        <input onChange={(event) => setConPassword(event.target.value)} value={conPassword} className='flex-grow' type={showComPassword ? 'text' : 'password'} name="password" placeholder="••••••••" required />

                        <span onClick={handelToggleComPassword}><FaPhabricator className='ms-1'></FaPhabricator></span>
                    </div>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo Url</label>
                    <input onChange={(event) => setPhotoUrl(event.target.value)} type="text" className="input-field block" placeholder="Photo url" required />
                </div>


                <button type="submit" className="from-button">Register your account</button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Have already account? <Link to='/login' className="text-blue-700 hover:underline dark:text-blue-500">Login</Link>
                </div>

            </form>
            {errors && <div>{errors}</div>}
        </div>
    );
};

export default Register;