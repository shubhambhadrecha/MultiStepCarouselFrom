import React from 'react'

function Name() {
  return (
    <div>
      <div className='max-w-[95%] h-[500px] rounded-2xl border border-black m-10 py-1 px-1 relative'>
                <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 bg-cyan-600'>
                        <div>
                            <div className='py-[10rem] text-3xl flex justify-center'>
                                <h1>Please enter your name</h1>
                            </div>
                            <div className='absolute inset-0 h-full flex justify-center items-center'>
                                <input
                                    type="text"
                                    name="price"
                                    id="price"
                                    className="block py-3 h-11 px-2 w-1/3 rounded-full border border-black text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-2xl sm:leading-6"
                                    placeholder="First Name"
                                />
                                <input
                                    type="text"
                                    name="price"
                                    id="price"
                                    className="block py-3 px-2 h-11 ml-5 w-1/3 rounded-full border border-black text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-2xl sm:leading-6"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>
                    </div>
            </div>
    </div>
  )
}

export default Name
