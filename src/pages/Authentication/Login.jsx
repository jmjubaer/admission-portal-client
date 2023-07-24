import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaTimesCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuthContext from "../../Hooks/UseAuthContext";
import SocialLogin from "./SocilaLogin";
/* eslint-disable no-undef */
const Login = () => {
    const [modal,setModal] = useState(false);
    const [show,setShow] = useState(true);
    const navigate = useNavigate();
    const {singIn,resetPass} = useAuthContext();
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form?.email.value;
        const password = form?.pass.value;
        singIn(email, password)
        .then(result => {
            const user = result.user;
            if(user) {
                Swal.fire({
                    icon: 'success',
                    title: 'User Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                  })
                navigate('/')
                form.reset();
            }
        })
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${err.message}`,
              })
        })
    }
    const handleResetPass = (event) => {
        event.preventDefault()
        const email = event.target.searchText.value;
        resetPass(email)
        .then((() => {
            Swal.fire({
                icon: 'success',
                title: 'Success' ,  
                text: 'Check your email and reset your password',
              })
              setModal(false)
              event.target.reset();
        }))
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${err.message}`,
              })
        })
    }
    return (
        <div data-aos="zoom-in" className="bg-white rounded-xl p-5 my-28 disc_effects_up w-1/2 mx-auto">
            <form onSubmit={handleLogin} className="">
                <div className="w-full flex flex-col">
                    <label className="text-xl mb-4" htmlFor="email">Email:</label>
                    <input required placeholder="Enter Your Email ...... " type="email" name="email" id="email" className="disc_effects p-3 px-5 rounded-xl outline-none"/>
                </div>
                <div className="w-full flex flex-col mt-8 relative">
                    <label className="text-xl mb-4" htmlFor="pass">Password:</label>
                    <input required placeholder="Password " type={show ? "password" : "text"} name="pass" id="pass" className="disc_effects p-3 px-5 rounded-xl outline-none"/>
                    <span onClick={() => setShow(!show)} className="text-2xl absolute right-5 bottom-3 cursor-pointer">{show ? <FaEye/> : <FaEyeSlash/>}</span>
                </div>
                <span onClick={() => setModal(true)} className="ml-auto block text-lg text-blue-700 m-2 text-right cursor-pointer">Forgotten Password ?</span>
                <input type="submit" value="Log In" className="disc_effects_up btn w-1/2 mt-8 mx-auto block active font-bold"/>
            </form>
            <p className="text-xl font-bold mt-5">New to JM Media?
            <Link className="text-blue-700 font-medium underline ml-2" to={"/signUp"}>Create Account. </Link></p>
            <div className="divider"> or </div>
            <SocialLogin></SocialLogin>

            {/*============ Modal ===============*/}
            <div className={`fixed z-50 w-1/2 rounded-xl shadow-xl h-60 bg-[#f8f8f8] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${modal ? "flex items-center justify-center" : "hidden"}`}>
                <form onSubmit={handleResetPass} className="w-4/5">
                    <input type="email" name="searchText" id="" className="p-3 w-full input_effects rounded-3xl px-5 bg-transparent" placeholder="Enter Your Email...."/>
                    <input type="submit" value="Sent Password" className="btn btn-primary mx-auto block mt-5"/>
                </form>
                <button onClick={() => setModal(false)} className="absolute -top-2 -right-2 text-3xl text-red-500"><FaTimesCircle/></button>
            </div>
        </div>
    );
};

export default Login;
