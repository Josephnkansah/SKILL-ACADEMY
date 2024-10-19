import React from 'react'
import './Link.css'
import blog from '../../images/stud 1.jpg'
import ALX from '../../images/alx.jpg'
import Tech from '../../images/c1.jpg'
import We from '../../images/pro 4.jpg'

const Link = () => {
  return (

    <>
    <div className='blog'>
    <div className='blog-left'>
        <img src={blog} alt='' className='blog-img'/>
        
        </div>
        <div className='blog-right'>
            <h3>ABOUT SKILL ACADEMY</h3>
            <h2>The More To Know</h2>
            <a href='/'>
            <p>Skill Academy is an innovative e-learning platform built to inspire and empower individuals through quality education. Our mission is to make learning accessible, engaging, and flexible for everyone, regardless of where they are in their journey. Whether you're a beginner just starting out or an experienced professional looking to upskill, we offer a diverse selection of courses tailored to meet your needs. From technology, business, and design to personal growth and creative arts, we have something for every learner.</p>

<p>Our platform is designed for learners of all levels, offering self-paced courses that allow you to learn at your own speed, on your own schedule. We believe education should be flexible and fit seamlessly into your life, which is why Skill Academy enables you to start learning anytime, anywhere. With expert instructors, interactive lessons, and progress tracking features, we’re here to support you every step of the way as you achieve your goals.</p>

<p>Join our growing community of learners who are transforming their skills and careers with Skill Academy. We are committed to helping you unlock your full potential, empowering you to succeed in today’s fast-paced world. Explore new skills, broaden your horizons, and take control of your learning journey with Skill Academy today.</p>

</a>
    </div>

</div>

<div className='blog'>
    <div className='blog-left'>
        <img src={ALX} alt='' className='blog-img'/>
        
        </div>
        <div className='blog-right'>
        <h3>ABOUT ALX</h3>
    <h2>Empowering Africa's Next Generation of Leaders</h2>
    <a href='https://www.alxafrica.com/3-year-programme/#:~:text=Qualify%20for%20a%20World%2DClass,university%20partners%20around%20the%20world.'>
    <p>
        ALX is a transformative e-learning platform dedicated to equipping young Africans with the skills they need to thrive in the modern workforce. Our mission is to provide accessible, high-quality education that inspires individuals to reach their full potential. Whether you’re just starting your career or looking to elevate your skill set, ALX offers a diverse range of programs tailored to meet your needs. From software engineering and data science to entrepreneurship and leadership, we have the resources to help you succeed.
    </p>
    <p>
        Designed for learners of all backgrounds, ALX offers flexible, self-paced courses that fit seamlessly into your busy life. Our platform emphasizes hands-on learning, enabling you to apply your knowledge in real-world scenarios. With expert instructors and a supportive community, we’re committed to guiding you through every step of your learning journey.
    </p>
    <p>
        Join a community of aspiring leaders and innovators who are transforming their futures with ALX. We are dedicated to empowering you to make an impact in your field and contribute to the growth of Africa. Explore new skills, broaden your horizons, and take control of your educational journey with ALX today.
    </p>
    </a>
    </div>

</div>

<div className='blog'>
    <div className='blog-left'>
        <img src={Tech} alt='' className='blog-img'/>
        
        </div>
        <div className='blog-right'>
        <h3>ABOUT COURSERA</h3>
    <h2>Empowering Learners Everywhere</h2>
    <a href='https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiA9YLk95iJAxVbgVAGHek8AC8YABAAGgJkZw&co=1&ase=2&gclid=CjwKCAjwjsi4BhB5EiwAFAL0YL1ve5c8LB_S5zUkBaJY8JvoBnLCWdTseggxGeTKqWf_XwkI5ZwBWhoCW5MQAvD_BwE&ohost=www.google.com&cid=CAESVeD2PJhS2EjNR0caMHwxiFHIZARSiCQ2laRcynRkAwvrZfmHvnZf8VsdJNofhl4SdxiTnLhNjxxxX3q3n0Q399FPQB960tAUxoMALBgEFWX_EEu642Y&sig=AOD64_1ndY-4xxdYJxplzg_gedJ4QiuK0Q&q&nis=4&adurl&ved=2ahUKEwi5_P7j95iJAxVxWkEAHRgrN3wQ0Qx6BAgIEAE'>
    <p>
        Coursera is a leading e-learning platform dedicated to providing high-quality education to learners around the globe. Our mission is to make learning accessible, engaging, and flexible for everyone, regardless of their background or experience level. Whether you're a beginner just starting out or a seasoned professional looking to advance your career, Coursera offers a diverse selection of courses tailored to meet your needs. From technology and business to the arts and personal development, we have something for every learner.
    </p>
    <p>
        Our platform is designed for learners of all levels, offering self-paced courses that allow you to learn at your own speed, on your own schedule. We believe education should be flexible and seamlessly fit into your life. With expert instructors, interactive lessons, and progress tracking features, Coursera supports you every step of the way as you pursue your educational goals.
    </p>
    <p>
        Join our vibrant community of learners who are transforming their skills and careers with Coursera. We are committed to helping you unlock your full potential, empowering you to succeed in today’s fast-paced world. Explore new skills, broaden your horizons, and take control of your learning journey with Coursera today.
    </p>
    </a>
    </div>

</div>

<div className='blog'>
    <div className='blog-left'>
        <img src={We} alt='' className='blog-img'/>
        
        </div>
        <div className='blog-right'>
        <h3>ABOUT LEARNHUB</h3>
    <h2>Unlocking Potential Through Quality Education</h2>
    <a href='https://learnhub.com/'>
    <p>
        LearnHub is an innovative e-learning platform dedicated to providing accessible and high-quality education for learners of all backgrounds. Our mission is to empower individuals by equipping them with the skills they need to thrive in an ever-evolving job market. Whether you're a novice starting your journey or a professional seeking to upskill, LearnHub offers a wide array of courses designed to meet your needs. From technology and business to health and creative arts, there’s something for everyone.
    </p>
    <p>
        At LearnHub, we believe that education should be flexible and accommodating. Our self-paced courses allow you to learn at your own pace, fitting seamlessly into your lifestyle. With a team of expert instructors, interactive content, and robust progress tracking, we support you every step of the way as you pursue your learning goals.
    </p>
    <p>
        Join our diverse community of learners who are transforming their skills and careers with LearnHub. We are committed to helping you unlock your potential, enabling you to make a meaningful impact in your field. Discover new skills, broaden your horizons, and take control of your educational journey with LearnHub today.
    </p>
    </a>
    </div>

</div>

</>

  )
}

export default Link