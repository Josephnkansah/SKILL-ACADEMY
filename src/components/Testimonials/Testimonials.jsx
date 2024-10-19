import React, { useRef } from 'react'
import './Testimonials.css'
import come_icon from '../../images/next-icon.png'
import go_icon from '../../images/back-icon.png'
import person_1 from '../../images/pro4.webp'
import person_2 from '../../images/pro1.webp'
import person_3 from '../../images/pro2.webp'
import person_4 from '../../images/pro3.webp'
import Title from '../Title/Title'


const Testimonials = () => {

    const opened = useRef();
    let tx =0;

        const openForward = ()=>{
            if(tx > -50){
                tx -= 25;
            }
            opened.current.style.transform = `translateX(${tx}%)`

}
        const openBackward = ()=>{
            if(tx < 0){
                tx += 25;
            }
                        opened.current.style.transform = `translateX(${tx}%)`
   }

  return (
    <>
    <Title subtitle='Real Experiences, Real Success' title='What Our Learners Say' />
    <section className='testimonials'>
        <img src={come_icon} alt='' className='come-btn' onClick=
        {openForward}/>
        <img src={go_icon} alt='' className='go-btn' onClick=
        {openBackward}/>
        <div className='opened'>
            <ul ref={opened}>
                <li>
                    <div className="open">
                        <div className="user-inf">
                            <img src={person_1} alt=''/>
                            <div>
                            <h3>EMILY WILLIAMS</h3>
                            <span>Marketing Specialist, USA</span>
                            </div>
                            </div>
                            <p>"I was looking for a flexible online platform to fit my busy schedule,and Skill Academy delivered exactly what I needed. The content is top-notch, and I could learn at my own pace. Highly recommended for anyone looking to upskill!"</p>
                    </div>
                </li>

                <li>
                    <div className="open">
                        <div className="user-inf">
                            <img src={person_2} alt=''/>
                            <div>
                                <h3>ROGER SCOTT</h3>
                                <span>Skill AD, canada</span>
                            </div>
                        </div>
                        <p>"Skill Academy has completely transformed the way I approach online learning. The courses are engaging, and the platform is incredibly easy to navigate. I've gained valuable skills that helped me grow in my career."</p>
                    </div>
                </li>

                <li>
                    <div className="open">
                        <div className="user-inf">
                            <img src={person_3} alt=''/>
                            <div>
                            <h3>SARAH BROWN</h3>
                            <span>Graphic Designer, Australia</span>
                            </div>
                            </div>
                            <p>"Skill Academy offers one of the best online learning experiences I've had. The instructors are knowledgeable, and the platform is intuitive. I've enhanced my design skills thanks to their comprehensive tutorials and support."</p>
                    </div>
                </li>

                <li>
                    <div className="open">
                        <div className="user-inf">
                            <img src={person_4} alt=''/>
                            <div>
                            <h3>JAMES LEE</h3>
                            <span>Software Developer, UK</span>
                            </div>
                            </div>
                            <p>"The variety of courses available on Skill Academy is fantastic. From beginner to advanced levels, there's something for everyone. I particularly loved the interactive features and practical projects that reinforced my learning."</p>

                    </div>
                </li>
            </ul>
        </div>

    </section>
    </>
  )
}

export default Testimonials