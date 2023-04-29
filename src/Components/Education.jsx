import React from 'react'
import background from "../Assets/school.jpg";
import College from "../Assets/college.png";
import GClogo from '../Assets/gculogo.png'
import Cricket from '../Assets/cricket.png'
import EGame from '../Assets/EGaming.png'
import Skate from '../Assets/skate.webp'
import Skate1 from '../Assets/Skate1.webp'
export default function Education() {

    return (
        <>
            <section className=' p-4 md:py-20 bg-light-grey'>
                <p className='text-center font-bold text-beige my-3'>Education</p>
                <h1 className='text-3xl md:text-4xl font-semibold text-center text-primary my-3'>My Education</h1>
                <p className='text-center text-dim-visible my-3'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </section>
            <section className='h-full max-w-screen-xl mx-auto p-4'>
                <div className='h-full bg-zinc  sticky top-24 -z-10 p-4'>
                    <h1 className='text-1xl md:text-2xl font-mono font-semibold  text-center text-white my-3'>School</h1>
                    <p className='text-center text-white my-3'>Far far away, behind the word mountains,</p>
                    <div className='flex flex-col-reverse md:flex-row'>
                        <div className=' w-full p-6 '>
                            <h3 className='text-xl font-semibold text-white my-3'>School Name : <span className='text-lg'>Government Islamia Secondary High School</span></h3>
                            <h3 className='text-xl font-semibold text-white my-3'>Subject : <span className='text-lg'>Science</span></h3>
                            <h3 className='text-xl font-semibold text-white my-3'>Obtained Marks: <span className='text-lg'>950</span></h3>
                            <h3 className='text-xl font-semibold text-white my-3'>Grade Earn: <span className='text-lg'>A+</span></h3>
                        </div>
                        <div className='h-64 w-full p-6  flex justify-center items-center'>
                            <img className='h-60 -z-10' src={background} alt="" />
                        </div>
                    </div>
                </div>
                <div className='bg-dark-green sticky top-28 mr-2 z-0 p-4'>
                    <h1 className='text-1xl md:text-2xl font-mono font-semibold  text-center text-white my-3'>College</h1>
                    <p className='text-center text-white my-3'>Far far away, behind the word mountains,</p>
                    <div className='flex flex-col-reverse md:flex-row'>
                        <div className=' w-full p-6 '>
                            <h3 className='text-xl font-semibold text-white my-3'>College Name : <span className='text-lg'>Government Post Graduate College</span></h3>
                            <h3 className='text-xl font-semibold text-white my-3'>Subject : <span className='text-lg'>Fsc (Pre-Engineering)</span></h3>
                            <h3 className='text-xl font-semibold text-white my-3'>Obtained Marks: <span className='text-lg'>917</span></h3>
                            <h3 className='text-xl font-semibold text-white my-3'>Grade Earn: <span className='text-lg'>A+</span></h3>
                        </div>
                        <div className='h-64 w-full p-6  flex justify-center items-center'>
                            <img className='h-60 -z-10' src={College} alt="" />
                        </div>
                    </div>
                </div>
                <div className='bg-dark-navy  sticky top-32 z-10 mr-4 p-4'>
                    <h1 className='text-1xl md:text-2xl font-mono font-semibold  text-center text-white my-3'>University</h1>
                    <p className='text-center text-white my-3'>Far far away, behind the word mountains,</p>
                    <div className='flex flex-col-reverse md:flex-row'>
                        <div className=' w-full p-6 '>
                            <h3 className='text-xl font-semibold text-white my-3'>University Name : <span className='text-lg'>Government College University Lahore</span></h3>
                            <h3 className='text-xl font-semibold text-white my-3'>Degree : <span className='text-lg'>BS (Computer Science)</span></h3>
                            <h3 className='text-xl font-semibold text-white my-3'>Obtained CGPA: <span className='text-lg'>3.03</span></h3>
                            <h3 className='text-xl font-semibold text-white my-3'>Grade Points: <span className='text-lg'>105</span></h3>
                        </div>
                        <div className='h-64 w-full p-6  flex justify-center items-center'>
                            <img className='h-60 -z-10' src={GClogo} alt="" />
                        </div>
                    </div>
                </div>
                <div className='bg-light-purple sticky top-36 z-10 mr-6 p-4'>
                    <h1 className='text-1xl md:text-2xl font-mono font-semibold  text-center text-white my-3'>Co-Curricular Activity</h1>
                    <p className='text-center text-white my-3'>Far far away, behind the word mountains,</p>
                    <div className='flex flex-col-reverse md:flex-row'>
                        <div className=' w-full p-6 '>
                            <h3 className='text-xl font-semibold text-white my-3'>Activity Name : <span className='text-lg'>Cricket</span></h3>
                            <h3 className='text-xl font-semibold text-white my-3'>Role : <span className='text-lg'>Batsman</span></h3>
                            <h3 className='text-xl font-semibold text-white my-3'>Winning Tournaments: <span className='text-lg'>7</span></h3>
                            <h3 className='text-xl font-semibold text-white my-3'>Man of the Match: <span className='text-lg'>4</span></h3>
                        </div>
                        <div className='h-64 w-full p-6  flex justify-center items-center'>
                            <img className='h-60 -z-10' src={Cricket} alt="" />
                        </div>
                    </div>
                </div>
                <div className='bg-mixed-orange sticky top-40 z-10 mr-8 p-4'>
                    <h1 className='text-1xl md:text-2xl font-mono font-semibold  text-center text-white my-3'>E-Gaming</h1>
                    <p className='text-center text-white my-3'>Far far away, behind the word mountains,</p>
                    <div className='flex flex-col-reverse md:flex-row'>
                        <div className=' w-full p-6 '>
                            <h3 className='text-xl font-semibold text-white my-3'>Activity Name : <span className='text-lg'>Gaming</span></h3>
                            <h3 className='text-xl font-semibold text-white my-3'>Role : <span className='text-lg'>Player</span></h3>
                            <h3 className='text-xl font-semibold text-white my-3'>Winning Tournaments: <span className='text-lg'>10</span></h3>
                            <h3 className='text-xl font-semibold text-white my-3'>Man of the Match: <span className='text-lg'>8</span></h3>
                        </div>
                        <div className='h-64 w-full p-6  flex justify-center items-center'>
                            <img className='h-60 -z-10' src={EGame} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-light-grey p-4 my-10'>
                <div className=' max-w-screen-xl mx-auto md:px-4 my-12'>
                    <p className='text-center font-bold text-beige my-3'>Article</p>
                    <h1 className='text-3xl md:text-4xl font-semibold text-center text-primary my-3'>My Blog</h1>
                    <p className='text-center text-dim-visible my-3'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    <div className='flex gap-6 flex-col md:flex-row my-6'>
                        <div className='w-full bg-primary p-7' data-aos="fade-right">
                            <img src={Skate} alt="" />
                            <h2 className='text-xl font-semibold text-mixed-orange my-5'>How To Find Gold In Mining</h2>
                            <p className='text-light-grey text-md  my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat et suscipit iste libero neque. Vitae quidem ducimus voluptatibus nemo cum odio ab enim nisi, itaque, libero fuga veritatis culpa quis!</p>
                            <a href="#" className='text-mixed-orange text-lg my-3 font-semibold'>Read More</a>
                        </div>
                        <div className='w-full bg-primary p-7' data-aos="fade-up">
                            <img src={Skate1} alt="" />
                            <h2 className='text-xl font-semibold text-mixed-orange my-5'>How To Find Gold In Mining</h2>
                            <p className='text-light-grey text-md  my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat et suscipit iste libero neque. Vitae quidem ducimus voluptatibus nemo cum odio ab enim nisi, itaque, libero fuga veritatis culpa quis!</p>
                            <a href="#" className='text-mixed-orange text-lg my-3 font-semibold'>Read More</a>
                        </div>
                        <div className='w-full bg-primary p-7' data-aos="fade-left">
                            <img src={Skate} alt="" />
                            <h2 className='text-xl font-semibold text-mixed-orange my-5'>How To Find Gold In Mining</h2>
                            <p className='text-light-grey text-md  my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat et suscipit iste libero neque. Vitae quidem ducimus voluptatibus nemo cum odio ab enim nisi, itaque, libero fuga veritatis culpa quis!</p>
                            <a href="#" className='text-mixed-orange text-lg my-3 font-semibold'>Read More</a>
                        </div>
                    </div>
                    <p className='text-primary mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam optio vitae nobis cum ex quod inventore autem voluptatum accusamus culpa assumenda veniam ab, maxime magni deserunt, odio praesentium velit corporis possimus molestias sed fugit rem. Praesentium delectus rerum dolore ratione eveniet totam deleniti officia mollitia odit. Quidem fuga nulla modi sit inventore architecto, vel eius ea illo, nesciunt, dolorem vero blanditiis recusandae nisi maiores? Sequi dignissimos voluptas dolorum aperiam ipsum ullam, corporis at sit, ratione eum, ea excepturi rem porro. Eos ducimus, adipisci ipsa sit dignissimos in excepturi ipsum eum nam inventore necessitatibus numquam libero nobis, odit nemo, esse laborum saepe? Perspiciatis, at! Provident sapiente sed nemo quia. Aliquam eum commodi voluptatibus quibusdam dolorem inventore incidunt, laborum molestias ratione exercitationem. Debitis necessitatibus, fuga iure possimus ex autem tempora fugiat sapiente libero ad numquam perspiciatis inventore nesciunt pariatur earum maiores consequatur dignissimos consectetur porro vitae exercitationem ratione laboriosam. Non similique tempora facere reiciendis nisi ipsam earum exercitationem optio alias consequatur, itaque amet est. Id reprehenderit possimus laborum nisi saepe quam necessitatibus placeat impedit consectetur, tempore odit quasi delectus minima reiciendis iusto nam, sunt ipsum at soluta temporibus ipsa facere nobis asperiores? Libero esse adipisci rerum enim assumenda neque perferendis unde natus.</p>


                    <div className='flex gap-6 flex-col md:flex-row my-6'>
                        <div className='w-full bg-primary p-7' data-aos="fade-right">
                            <img src={Skate1} alt="" />
                            <h2 className='text-xl font-semibold text-mixed-orange my-5'>How To Find Gold In Mining</h2>
                            <p className='text-light-grey text-md  my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat et suscipit iste libero neque. Vitae quidem ducimus voluptatibus nemo cum odio ab enim nisi, itaque, libero fuga veritatis culpa quis!</p>
                            <a href="#" className='text-mixed-orange text-lg my-3 font-semibold'>Read More</a>
                        </div>
                        <div className='w-full bg-primary p-7' data-aos="fade-up">
                            <img src={Skate} alt="" />
                            <h2 className='text-xl font-semibold text-mixed-orange my-5'>How To Find Gold In Mining</h2>
                            <p className='text-light-grey text-md  my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat et suscipit iste libero neque. Vitae quidem ducimus voluptatibus nemo cum odio ab enim nisi, itaque, libero fuga veritatis culpa quis!</p>
                            <a href="#" className='text-mixed-orange text-lg my-3 font-semibold'>Read More</a>
                        </div>
                        <div className='w-full bg-primary p-7' data-aos="fade-left">
                            <img src={Skate1} alt="" />
                            <h2 className='text-xl font-semibold text-mixed-orange my-5'>How To Find Gold In Mining</h2>
                            <p className='text-light-grey text-md  my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat et suscipit iste libero neque. Vitae quidem ducimus voluptatibus nemo cum odio ab enim nisi, itaque, libero fuga veritatis culpa quis!</p>
                            <a href="#" className='text-mixed-orange text-lg my-3 font-semibold'>Read More</a>
                        </div>
                    </div>
                        <p className='text-primary mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus voluptas ex minus cumque debitis repellat tenetur eaque iusto iure aliquam doloremque magnam laudantium nulla harum autem voluptates, hic delectus facere incidunt rerum optio corrupti in vero adipisci? Accusantium voluptas tenetur ullam non quo dignissimos. Alias, praesentium iste voluptatum ducimus odit dolor asperiores quas possimus soluta optio dolorem quibusdam, quae ut id? Quis laudantium iste facere, repellendus vitae delectus placeat mollitia eveniet rerum asperiores quae, dolores incidunt ipsam sapiente, quia vero. Officiis ratione ullam suscipit deleniti a maiores dolorem voluptatum inventore quisquam? Similique quasi eaque inventore exercitationem harum itaque eum tempore necessitatibus odio minima minus, officia officiis modi debitis ad doloribus non fugiat eligendi ut hic pariatur? Magnam ab at sit vitae, dicta aperiam delectus voluptate voluptatibus facilis labore illum a, laborum modi. Nisi, non inventore soluta ducimus quaerat expedita, corporis commodi aliquam totam illum minus cupiditate tempore ullam pariatur incidunt? Voluptates repellendus consectetur necessitatibus voluptate aliquid labore ullam maxime voluptatibus aliquam hic. In laborum beatae, fuga alias velit provident! Ratione minima eum rem cum ipsum, magnam, cupiditate iure dolorum dicta debitis aperiam deserunt dolore ex aut cumque velit optio tempore? Reprehenderit animi consequuntur soluta, eius ex omnis molestias incidunt! Libero!</p>
                </div>
            </section>
        </>
    )
}
