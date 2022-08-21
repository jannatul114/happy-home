import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1 className='text-primary text-center my-3'>Contact</h1>
            <h1 className='text-3xl text-center font-bold text-primary mb-6'> Let us handle your  <br /> project, professionally.</h1>
            <div className='mx-auto w-1/2'>

                <form className='my-10'>
                    <div className='flex justify-between flex-col sm:flex-row'>
                        <input type="text" placeholder="Type here" class="input  w-full max-w-xs bg-base-200 rounded-none" />
                        <input type="text" placeholder="Type here" class="input  w-full max-w-xs bg-base-200 rounded-none mt-3 sm:mt-0" />
                    </div>
                    <div className='flex justify-between flex-col sm:flex-row mt-4'>
                        <input type="text" placeholder="Type here" class="input bg-base-200  w-full max-w-xs rounded-none" />
                        <input type="text" placeholder="Type here" class="input bg-base-200 w-full max-w-xs rounded-none mt-3 sm:mt-0" />
                    </div>
                    <textarea class="textarea bg-base-200 rounded-none w-full mt-4" placeholder="Bio"></textarea>
                    <div className='flex justify-center'>
                        <button className='mx-auto btn btn-primary rounded-none text-white my-3'>Send message</button>
                    </div>
                </form>



            </div>
        </div>
    );
};

export default Contact;