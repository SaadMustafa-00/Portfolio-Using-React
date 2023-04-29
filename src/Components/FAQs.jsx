import React from 'react'

export default function FAQs() {
    return (
        <>
            <section className=' p-4 md:py-20 bg-light-grey'>
                <p className='text-center font-bold text-beige my-3'>FAQs</p>
                <h1 className='text-3xl md:text-4xl font-semibold text-center text-primary my-3'>Frequently Ask Questions</h1>
                <p className='text-center text-dim-visible my-3'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </section>
            <section className='max-w-screen-xl mx-auto p-4 my-5'>
                <div className='grid grid-cols-1 md:grid-cols-2' >
                    <div className='p-6' data-aos="fade-right">
                        <h2 className='text-2xl font-semibold text-mixed-orange my-5 mt-5'>Can I accept both Paypal and Stripe?</h2>
                        <p className='text-primary text-lg my-2 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.</p>

                        <h2 className='text-2xl font-semibold text-mixed-orange my-5 mt-5'>What available is refund period?</h2>
                        <p className='text-primary text-lg my-2 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.</p>

                        <h2 className='text-2xl font-semibold text-mixed-orange my-5 mt-5'>Can I accept both Paypal and Stripe?</h2>
                        <p className='text-primary text-lg my-2 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.</p>
                    </div>
                    <div className='p-6' data-aos="fade-left">
                        <h2 className='text-2xl font-semibold text-mixed-orange my-5 mt-5'>Can I accept both Paypal and Stripe?</h2>
                        <p className='text-primary text-lg my-2 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.</p>

                        <h2 className='text-2xl font-semibold text-mixed-orange my-5 mt-5'>What available is refund period?</h2>
                        <p className='text-primary text-lg my-2 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.</p>

                        <h2 className='text-2xl font-semibold text-mixed-orange my-5 mt-5'>Can I accept both Paypal and Stripe?</h2>
                        <p className='text-primary text-lg my-2 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.</p>
                    </div>
                </div>
            </section>
            <section className=' py-2 my-4'>
                <div className='max-w-screen-xl mx-auto p-8 my-5'>
                    <h1 className='text-2xl md:text-2xl font-semibold  text-primary my-3'>More Questions?</h1>
                    <p className=' text-dim-visible my-3 text-lg'>Drop Your Concern down below for a better approach.</p>

                    <textarea name="" id="" cols="27" rows="5" placeholder='Type Here.' className=' my-4 p-4 border-1 border-dark-grey outline-none rounded-lg'></textarea><br />
                    <button className='py-3 px-6 bg-dark-grey text-lg font-semibold text-white rounded-lg'>Send</button>

                    <div className='md:float-right '>
                        <h3 className=' text-xl font-semibold my-2'>My Email</h3>
                        <p className=' text-beige'>saadmustafa2578@gmail.com</p>
                    </div>
                </div>
            </section>
        </>
    )
}
