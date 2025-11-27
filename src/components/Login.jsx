import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className='dark:text-black '>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box h-[440px]">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

            <h3 className="font-bold text-lg">Login</h3>

            {/* Email */}
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input type="email" placeholder='Enter your Email' className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            {/* Password */}
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input type="text" placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register("Password", { required: true })}
              />
              <br />
              {errors.Password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            <div className='flex justify-around mt-10'>
              <button className='bg-pink-500 text-white rounded py-1 px-2 hover:bg-pink-700 duration-200'>Login</button>
              <p>
                Not registered?
                <Link to="/SignUp" className='underline text-blue-500 cursor-pointer'>
                  SignUp</Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>

    </div>
  );
};

export default Login;
