import React from 'react'

export default function Pricing() {
  return (
    <>
        <section className=' p-4 md:py-20 bg-light-grey'>
                <p className='text-center font-bold text-beige my-3'>Prices</p>
                <h1 className='text-3xl md:text-4xl font-semibold text-center text-primary my-3'>My Pricing</h1>
                <p className='text-center text-dim-visible my-3'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </section>
        <section className='max-w-screen-xl mx-auto p-4 pricing-cards mb-16 mt-16'>
                <div className='p-4 py-8 bg-primary flex items-center flex-col'  data-aos="flip-left">
                    <h2 className='text-2xl text-white font-semibold my-2'>Basic</h2>
                    <h2 className='text-4xl text-mixed-orange mb-3'>$ 47/ <span className='text-lg text-mixed-grey'>year</span></h2>
                    <p className='text-mixed-grey my-2'><span class="material-symbols-outlined text-green">done</span>Officia quaerat eaque neque</p>
                    <p className='text-mixed-grey my-2'><span class="material-symbols-outlined text-green">done</span>Officia quaerat eaque neque</p>
                    <p className='text-mixed-grey my-2'><span class="material-symbols-outlined text-green">done</span>Officia quaerat eaque neque</p>
                    <p className='text-mixed-grey my-2'><span class="material-symbols-outlined text-green">done</span>Officia quaerat eaque neque</p>
                    <p className='text-mixed-grey my-2'><span class="material-symbols-outlined text-green">done</span>Officia quaerat eaque neque</p>
                    <p className='text-mixed-grey my-2'><span class="material-symbols-outlined text-green">done</span>Officia quaerat eaque neque</p>
                    <button className='py-3 px-6 bg-dark-grey my-5 font-semibold text-white'>Buy Now</button>
                </div>
                <div className='p-4 py-8 bg-primary flex items-center flex-col' data-aos="flip-left">
                    <h2 className='text-2xl text-white font-semibold my-2'>Premium</h2>
                    <h2 className='text-4xl text-mixed-orange mb-3'>$ 200/ <span className='text-lg text-mixed-grey'>year</span></h2>
                    <p className='text-mixed-grey my-2'><span class="material-symbols-outlined text-green">done</span>Officia quaerat eaque neque</p>
                    <p className='text-mixed-grey my-2'><span class="material-symbols-outlined text-green">done</span>Officia quaerat eaque neque</p>
                    <p className='text-mixed-grey my-2'><span class="material-symbols-outlined text-green">done</span>Officia quaerat eaque neque</p>
                    <p className='text-mixed-grey my-2'><span class="material-symbols-outlined text-green">done</span>Officia quaerat eaque neque</p>
                    <p className='text-mixed-grey my-2'><span class="material-symbols-outlined text-green">done</span>Officia quaerat eaque neque</p>
                    <p className='text-mixed-grey my-2'><span class="material-symbols-outlined text-green">done</span>Officia quaerat eaque neque</p>
                    <button className='py-3 px-6 bg-mixed-orange my-5 font-semibold text-white'>Buy Now</button>
                </div>
                <div className='p-4 py-8 bg-primary flex items-center flex-col' data-aos="flip-left">
                    <h2 className='text-2xl text-white font-semibold my-2'>Professional</h2>
                    <h2 className='text-4xl text-mixed-orange mb-3'>$ 750/ <span className='text-lg text-mixed-grey'>year</span></h2>
                    <p className='text-mixed-grey my-2'><span class="material-symbols-outlined text-green">done</span>Officia quaerat eaque neque</p>
                    <p className='text-mixed-grey my-2'><span class="material-symbols-outlined text-green">done</span>Officia quaerat eaque neque</p>
                    <p className='text-mixed-grey my-2'><span class="material-symbols-outlined text-green">done</span>Officia quaerat eaque neque</p>
                    <p className='text-mixed-grey my-2'><span class="material-symbols-outlined text-green">done</span>Officia quaerat eaque neque</p>
                    <p className='text-mixed-grey my-2'><span class="material-symbols-outlined text-green">done</span>Officia quaerat eaque neque</p>
                    <p className='text-mixed-grey my-2'><span class="material-symbols-outlined text-green">done</span>Officia quaerat eaque neque</p>
                    <button className='py-3 px-6 bg-dark-grey my-5 font-semibold text-white'>Buy Now</button>
                </div>
        </section>
    </>
  )
}
