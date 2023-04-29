import React from 'react'



export default function HireMe() {
    return (
        <>
            <section className=' p-4 md:py-20 bg-light-grey'>
                <p className='text-center font-bold text-beige my-3'>Contact</p>
                <h1 className='text-3xl md:text-4xl font-semibold text-center text-primary my-3'>Hire Me</h1>
                <p className='text-center text-dim-visible my-3'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </section>
            <section className='max-w-screen-xl mx-auto p-4  bg-light-primary my-10' data-aos="flip-down">
                <h2 className='text-2xl p-4 font-semibold text-mixed-orange'>Fill Out this Form</h2>
                <form className='p-4'>
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-md text-light-grey bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-mixed-orange focus:outline-none focus:ring-0 focus:border-mixed-orange peer" placeholder=" " required />
                            <label for="floating_first_name" class="peer-focus:font-medium absolute text-md text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-mixed-orange peer-focus:dark:text-mixed-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-md text-light-grey bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-mixed-orange focus:outline-none focus:ring-0 focus:border-mixed-orange peer" placeholder=" " />
                            <label for="floating_last_name" class="peer-focus:font-medium absolute text-md text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-mixed-orange peer-focus:dark:text-mixed-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                        </div>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-mixed-orange focus:outline-none focus:ring-0 focus:border-mixed-orange peer" placeholder=" " />
                            <label for="floating_phone" class="peer-focus:font-medium absolute text-md text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-mixed-orange peer-focus:dark:text-mixed-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-md text-light-grey bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-mixed-orange focus:outline-none focus:ring-0 focus:border-mixed-orange peer" placeholder=" " />
                            <label for="floating_company" class="peer-focus:font-medium absolute text-md text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-mixed-orange peer-focus:dark:text-mixed-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
                        </div>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-mixed-orange focus:outline-none focus:ring-0 focus:border-mixed-orange peer" placeholder=" " />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-md text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-mixed-orange peer-focus:dark:text-mixed-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <textarea class="block py-1 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-mixed-orange focus:outline-none focus:ring-0 focus:border-mixed-orange peer" placeholder="Type Your Concern Here " />

                    </div>
                    <button className='py-3 px-7 bg-mixed-orange text-white text-lg rounded-lg'>Submit</button>
                </form>
            </section>

            <section className=' p-4 md:py-12 '>
                <p className='text-center font-bold text-beige my-3'>info</p>
                <h1 className='text-3xl md:text-4xl font-semibold text-center text-primary my-3'>My Info</h1>
                <p className='text-center text-dim-visible my-3'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </section>
            <section className='max-w-screen-xl mx-auto  py-4' data-aos="fade-right">
                <div className=''>
                    <div className='p-4 bg-light-primary'>
                        <div className='m-4'>
                            <div className='flex flex-col md:flex-row gap-10 my-5'>
                                <h2 className='text-2xl text-mixed-orange my-2 font-semibold'>Name : <span className='text-lg text-light-grey font-normal'>Saad Mustafa</span></h2>
                                <h2 className='text-2xl text-mixed-orange my-2 font-semibold'>Age : <span className='text-lg text-light-grey font-normal'>21 Years</span></h2>
                            </div>
                            <div className='flex flex-col md:flex-row gap-10 my-5'>
                                <h2 className='text-2xl text-mixed-orange my-2 font-semibold'>Phone No : <span className='text-lg text-light-grey font-normal'>0335-0000000</span></h2>
                                <h2 className='text-2xl text-mixed-orange my-2 font-semibold'>Nationality : <span className='text-lg text-light-grey font-normal'>Pakistani</span></h2>
                            </div>
                            <h2 className='text-2xl text-mixed-orange my-6 font-semibold'>Email : <span className='text-lg text-light-grey font-normal'>saadmustafa2578@gmail.com</span></h2>
                            <h2 className='text-2xl text-mixed-orange my-6 font-semibold'>Address : <span className='text-lg text-light-grey font-normal'>House no  ##  Block C Johar Town Lahore, Pakistan.</span></h2>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}
