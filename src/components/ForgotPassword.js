import React, { useState } from 'react'

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleForgotPassword = (e) => {
        e.preventDefault();

        setSuccessMessage(
            `If an account with ${email} exists, a password reset link has been sent.`
        );

        setEmail('')
    };

    return (
        <div className='flex bg-gray-100 items-center justify-center h-screen w-full'>
            <form 
                onSubmit={handleForgotPassword}
                className='bg-white p-8 rounded-lg shadow-md w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3'
             >
                    <h2 className='text-2xl sm:text-3xl font-bold text-center mb-6 text-center mb-6 text-gray-800'>Forgot Password</h2>
                    {successMessage && (
                        <div className='bg-green-100 text-green-800 p-4 rounded mb4 text-sm sm:text-base'>
                            {successMessage}
                        </div>
                    )}

                 <div className='mb-6'>
                     <label
                          htmlFor='email'
                          className='block mb-2 font-medium text-gray-700 text-sm sm:text-lg'
                        >
                                Email Address
                            </label>
                            <input
                            type='email'
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full border rounded-lg p-3 text-sm sm:text-lg focus:ring-blue-500'
                            placeholder='Enter your email address'
                            required
                         />
                 </div>

                    <button 
                        type='submit'
                        className='bg-blue-600 text-white w-full py-3 rounded-lg text-sm sm:text-lg hover:bg-blue-700 transition duration-300'
                    >
                        Send Reset Link
                    </button>

                 <div className='mt-4 text-center'>
                        <a
                            href='/login'
                            className='text-blue-500 hover:underline text-sm sm:text-base'
                        >
                            Back to Login
                        </a>
                 </div>
             </form>
        </div>
    );
};

export default ForgotPassword;