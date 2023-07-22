import { FaFacebook, FaGoogle } from "react-icons/fa";
import UseAuthContext from "../../Hooks/UseAuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn,facebookSignIn} = UseAuthContext();
    const navigate = useNavigate();
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: 'User Login Successful',
                showConfirmButton: false,
                timer: 1500
              })
            navigate('/')
        })
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${err.message}`,
              })
        })
    }
    const handleFacebookSignIn = () => {
        facebookSignIn()
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: 'User Login Successful',
                showConfirmButton: false,
                timer: 1500
              })
            navigate('/')
        })
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${err.message}`,
              })
        })
    }
    return (
        <div className="flex gap-5">
            <button onClick={handleGoogleSignIn} className="flex items-center gap-3 disc_effects_up p-3 px-8 w-full font-bold text-center mx-auto justify-center text-red-500 active rounded-xl"><FaGoogle className="text-2xl"/><span>Google</span></button>
            <button onClick={handleFacebookSignIn} className="flex items-center gap-3 disc_effects_up p-3 px-8 w-full font-bold text-center mx-auto justify-center text-blue-600 active rounded-xl"><FaFacebook className="text-2xl"/><span>Facebook</span></button>
    </div>
    );
};

export default SocialLogin;