import React from 'react'
import './Blog.css'
import blog_img from '../../images/c2.jpg'
import Title from '../Title/Title'
const Blog = () => {
  return (
    <>
         <Title subtitle='Our Mission' title='At Skill Academy'/>
    <div className='blog'>
        <div className='blog-left'>
            <img src={blog_img} alt='' className='blog-img'/>
            
            </div>
            <div className='blog-right'>
                <h3>ABOUT SKILL ACADEMY</h3>
                <h2>Empowering Learners Everywhere</h2>
                <p>Skill Academy is an innovative e-learning platform built to inspire and empower individuals through quality education. Our mission is to make learning accessible, engaging, and flexible for everyone, regardless of where they are in their journey. Whether you're a beginner just starting out or an experienced professional looking to upskill, we offer a diverse selection of courses tailored to meet your needs. From technology, business, and design to personal growth and creative arts, we have something for every learner.</p>

<p>Our platform is designed for learners of all levels, offering self-paced courses that allow you to learn at your own speed, on your own schedule. We believe education should be flexible and fit seamlessly into your life, which is why Skill Academy enables you to start learning anytime, anywhere. With expert instructors, interactive lessons, and progress tracking features, we’re here to support you every step of the way as you achieve your goals.</p>

<p>Join our growing community of learners who are transforming their skills and careers with Skill Academy. We are committed to helping you unlock your full potential, empowering you to succeed in today’s fast-paced world. Explore new skills, broaden your horizons, and take control of your learning journey with Skill Academy today.</p>


        </div>

    </div>
    </>
  )
}

export default Blog