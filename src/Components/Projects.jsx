import React from 'react'
import Weblogo from '../Assets/weblogo.jpg'
import Netalogo from '../Assets/netateam.png'
import Archilogo from '../Assets/Archi.jpg'
export default function Projects() {
    return (
        <>
            <section className=' p-3 md:py-20 bg-light-grey'>
                <p className='text-center font-bold text-beige my-3'>Projects</p>
                <h1 className='text-3xl md:text-4xl font-semibold text-center text-primary my-3'>My Projects</h1>
                <p className='text-center text-dim-visible my-3'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </section>
            <section className='scroller max-w-screen-xl mx-auto p-4 grid gap-20 md:gap-4 '>
                <div className='scroller-stick-child py-4 shadow-xl px-4 bg-primary flex flex-col justify-center'>
                    <div className='p-2 bg-primary'>
                        <h1 className='text-1xl md:text-3xl font-semibold text-center text-white my-3'>Career Ratio</h1>
                        <p className='text-center text-dim-visible my-3'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </div>

                    <div className='flex gap-2 p-8 bg-white'>
                        <div className='bg-beige font-light rounded-full py-2 px-3'>
                            <span class="material-symbols-outlined text-5xl text-white font-light">business_center</span>
                        </div>
                        <div className=' px-5'>
                            <h2 className='font-bold text-2xl'>750</h2>
                            <p className='text-xl text-dark-greyfont-semibold'>Projects Complete</p>
                        </div>
                    </div>
                    <div className='flex gap-2 p-8 bg-white'>
                        <div className='bg-beige font-light rounded-full py-2 px-3'>
                            <span class="material-symbols-outlined text-5xl text-white font-light">groups</span>
                        </div>
                        <div className=' px-5'>
                            <h2 className='font-bold text-2xl'>612</h2>
                            <p className='text-lg text-dark-grey font-semibold'>Happy Clients</p>
                        </div>
                    </div> <div className='flex gap-2 p-8 bg-white'>
                        <div className='bg-beige font-light rounded-full py-2 px-3'>
                            <span class="material-symbols-outlined text-5xl text-white font-light">local_cafe</span>
                        </div>
                        <div className=' px-5'>
                            <h2 className='font-bold text-2xl'>478</h2>
                            <p className='text-lg text-dark-grey font-semibold'>Cup of Teas</p>
                        </div>
                    </div>
                    <div className='flex gap-2 p-8 bg-white'>
                        <div className='bg-beige font-light rounded-full py-2 px-3'>
                            <span class="material-symbols-outlined text-5xl text-white font-light">calendar_month</span>
                        </div>
                        <div className=' px-5'>
                            <h2 className='font-bold text-2xl'>780</h2>
                            <p className='text-lg text-dark-grey font-semibold'>Years Experienced</p>
                        </div>
                    </div>
                </div>


                <div className='scroller-movable-child py-4 px-2'>
                    <h1 className='text-1xl md:text-3xl font-semibold text-center text-primary my-3'>About Projects</h1>
                    <p className='text-center text-dim-visible my-3'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    <div className='md:h-44 bg-light-primary flex flex-col md:flex-row shadow-lg mt-5'>
                        <div className='p-5 flex items-center justify-center'><img className=' ' src={Weblogo} alt="" /></div>
                        <div className='p-5 flex items-center flex-col justify-center'> <h3 className='font-semibold text-white'>URoots UI</h3><p className='text-light-grey'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni exercitationem suscipit repellendus illum maiores ab, nemo laborum eius culpa, quis deleniti itaque odit, voluptas dolores. Aperiam nesciunt beatae hic culpa.</p></div>
                    </div>
                    <div className='flex md:h-44 bg-light-primary flex-col md:flex-row-reverse shadow-lg mt-5'>
                        <div className='p-5 flex items-center justify-center'><img className='md:w-96 md:h-32 ' src={Netalogo} alt="" /></div>
                        <div className='p-5 flex items-center flex-col justify-center'> <h3 className='font-semibold text-white'>NetaTeam</h3><p className='text-light-grey'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni exercitationem suscipit repellendus illum maiores ab, nemo laborum eius culpa, quis deleniti itaque odit, voluptas dolores. Aperiam nesciunt beatae hic culpa.</p></div>
                    </div>
                    <div className=' md:h-44 bg-light-primary flex flex-col md:flex-row shadow-lg mt-5'>
                        <div className='p-5 flex items-center justify-center'><img className=' w-96 h-32' src={Archilogo} alt="" /></div>
                        <div className='p-5 flex items-center flex-col justify-center'> <h3 className='font-semibold text-white'>Archi</h3><p className='text-light-grey'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni exercitationem suscipit repellendus illum maiores ab, nemo laborum eius culpa, quis deleniti itaque odit, voluptas dolores. Aperiam nesciunt beatae hic culpa.</p></div>
                    </div>
                    <div className='md:h-44 bg-light-primary flex flex-col md:flex-row-reverse shadow-lg mt-5'>
                        <div className='p-5 flex items-center justify-center'><img className=' ' src={Weblogo} alt="" /></div>
                        <div className='p-5 flex items-center flex-col justify-center'> <h3 className='font-semibold text-white'>URoots UI</h3><p className='text-light-grey'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni exercitationem suscipit repellendus illum maiores ab, nemo laborum eius culpa, quis deleniti itaque odit, voluptas dolores. Aperiam nesciunt beatae hic culpa.</p></div>
                    </div>
                    <div className='md:h-44 bg-light-primary flex flex-col md:flex-row shadow-lg mt-5'>
                        <div className='p-5 flex items-center justify-center'><img className='md:w-96 md:h-32 ' src={Netalogo} alt="" /></div>
                        <div className='p-5 flex items-center flex-col justify-center'> <h3 className='font-semibold text-white'>NetaTeam</h3><p className='text-light-grey'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni exercitationem suscipit repellendus illum maiores ab, nemo laborum eius culpa, quis deleniti itaque odit, voluptas dolores. Aperiam nesciunt beatae hic culpa.</p></div>
                    </div>
                    <div className='md:h-44 bg-light-primary flex flex-col md:flex-row-reverse shadow-lg mt-5'>
                        <div className='p-5 flex items-center justify-center'><img className='w-96 h-32 ' src={Archilogo} alt="" /></div>
                        <div className='p-5 flex items-center flex-col justify-center'> <h3 className='font-semibold text-white'>Archi</h3><p className='text-light-grey'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni exercitationem suscipit repellendus illum maiores ab, nemo laborum eius culpa, quis deleniti itaque odit, voluptas dolores. Aperiam nesciunt beatae hic culpa.</p></div>
                    </div>
                    <div className='md:h-44 bg-light-primary flex flex-col md:flex-row shadow-lg mt-5'>
                        <div className='p-5 flex items-center justify-center'><img className=' ' src={Weblogo} alt="" /></div>
                        <div className='p-5 flex items-center flex-col justify-center'> <h3 className='font-semibold text-white'>URoots UI</h3><p className='text-light-grey'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni exercitationem suscipit repellendus illum maiores ab, nemo laborum eius culpa, quis deleniti itaque odit, voluptas dolores. Aperiam nesciunt beatae hic culpa.</p></div>
                    </div>
                    <div className='md:h-44 bg-light-primary flex flex-col md:flex-row-reverse shadow-lg mt-5'>
                        <div className='p-5 flex items-center justify-center'><img className='md:w-96 md:h-32 ' src={Netalogo} alt="" /></div>
                        <div className='p-5 flex items-center flex-col justify-center'> <h3 className='font-semibold text-white'>NetaTeam</h3><p className='text-light-grey'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni exercitationem suscipit repellendus illum maiores ab, nemo laborum eius culpa, quis deleniti itaque odit, voluptas dolores. Aperiam nesciunt beatae hic culpa.</p></div>
                    </div>
                    <div className='md:h-44 bg-light-primary flex flex-col md:flex-row shadow-lg mt-5'>
                        <div className='p-5 flex items-center justify-center'><img className=' w-96 h-32' src={Archilogo} alt="" /></div>
                        <div className='p-5 flex items-center flex-col justify-center'> <h3 className='font-semibold text-white'>Archi</h3><p className='text-light-grey'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni exercitationem suscipit repellendus illum maiores ab, nemo laborum eius culpa, quis deleniti itaque odit, voluptas dolores. Aperiam nesciunt beatae hic culpa.</p></div>
                    </div>
                    <div className='md:h-44 bg-light-primary flex flex-col md:flex-row-reverse shadow-lg mt-5'>
                        <div className='p-5 flex items-center justify-center'><img className=' ' src={Weblogo} alt="" /></div>
                        <div className='p-5 flex items-center flex-col justify-center'> <h3 className='font-semibold text-white'>URoots UI</h3><p className='text-light-grey'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni exercitationem suscipit repellendus illum maiores ab, nemo laborum eius culpa, quis deleniti itaque odit, voluptas dolores. Aperiam nesciunt beatae hic culpa.</p></div>
                    </div>

                </div>

            </section>

            <section className='py-4 bg-light-primary my-5'>
                <div className='max-w-screen-xl mx-auto p-4'>
                    <h1 className='text-3xl md:text-4xl font-semibold  text-white my-3'>Have a project on your mind.</h1>
                    <p className='text-white'>A small river named Duden flows by their place and supplies it with the necessary <br />regelialia. It is a paradisematic country, in which roasted parts of sentences fly.</p>
                    <button className='py-3 px-5 mt-5 font-semibold text-white text-lg rounded-3xl shadow-orange-500 shadow-lg bg-mixed-orange'>Contact Me</button>
                </div>
            </section>
            
        </>
    )
}
