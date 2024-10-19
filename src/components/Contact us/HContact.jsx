import React from 'react'
import './HContact.css'
import msg from '../../images/msg.png'
import location from '../../images/location.png'
import mail from '../../images/mail.png'
import phone from '../../images/phone.png'
const HContact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8b2ee287-7d43-4ee0-a034-17982b192aa3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thank You! Your Form Has Been Successfully Submitted");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
    <div className='contact'>
      <div className='contact-nol'>
        <h2>Send us a message<img src={msg}alt=''/></h2>
        <p>We’d love to hear from you! Whether you have questions, feedback, or need assistance, 
          feel free to reach out.
           Our team is here to support your learning journey.</p>
           <ul>
            <li><img src={mail}alt=''/>Email: jnkansahoseph4@gmail.com</li>
            <li><img src={phone}alt=''/>Phone: +233 592 718 120</li>
            <li><img src={location}alt=''/>Location: 193 Skill Academy, kumasi, Ghana</li>
           </ul>
      </div>
      <div className='contact-nol'>
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required/>
          <label>Phone number</label>
          <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
          <label>Write your message here</label>
          <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
    </>
  )
}

export default HContact