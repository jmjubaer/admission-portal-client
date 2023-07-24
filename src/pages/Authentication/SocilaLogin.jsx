import { FaFacebook, FaGoogle } from "react-icons/fa";
import UseAuthContext from "../../Hooks/UseAuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn,facebookSignIn} = UseAuthContext();
    const navigate = useNavigate();
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then((result) => {
            const user = result.user;
            const newUser = {
                name: user?.displayName,
                image: user?.photoURL,
                address: "null",
                email: user?.email,
                collageName: "null"
            }
            console.log(newUser);
            fetch(`http://localhost:5000/user/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if(data){
                    Swal.fire({
                        icon: 'success',
                        title: 'User Login Successful',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    navigate('/')
                }
            })
            .catch(() => {
                fetch('http://localhost:5000/user',{
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(newUser)
                })
                .then(res => res.json())
                .then(data => {
                    if(data?.insertedId){
                        Swal.fire({
                            icon: "success",
                            title: "Sign UP success",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        navigate("/");
                    }
                })
            })

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
        <div className="flex md:flex-row flex-col gap-5">
            <button onClick={handleGoogleSignIn} className="flex items-center gap-3 disc_effects_up p-3 px-8 w-full font-bold text-center mx-auto justify-center text-red-500 active rounded-xl"><FaGoogle className="text-2xl"/><span>Google</span></button>
            <button onClick={handleFacebookSignIn} className="flex items-center gap-3 disc_effects_up p-3 px-8 w-full font-bold text-center mx-auto justify-center text-blue-600 active rounded-xl"><FaFacebook className="text-2xl"/><span>Facebook</span></button>
    </div>
    );
};

export default SocialLogin;