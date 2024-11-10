import React from 'react'
import { MdAttachEmail } from "react-icons/md";
import { BsFillTelephoneForwardFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'> 
        <div className='space-y-8'>
            <h2 className='text-5xl' data-aos="flip-right">Get in touch</h2>
            <p className='text-gray-600 text-[18px] pt-2' data-aos="flip-right">
                Drop me a line, give me a call, or send me a message by submitting the form.
            </p>
            <div className='flex gap-3 items-center' data-aos="flip-right">
                <MdAttachEmail size={30} /> mairahassanfarooqui27@gmail.com
            </div>

            <div className='flex gap-3 items-center' data-aos="flip-right">
                <BsFillTelephoneForwardFill size={30} /> 0335 0378598
            </div> 
        </div>

        <div className='space-y-8'>
            <div className='flex flex-col gap-1' data-aos="flip-right">
                <label htmlFor='name'>Name</label>
                <input type="text"
                className='h-[40px] bg-transparent border border-gray-600' 
                id='name'/>
                
            </div>

            <div className='flex flex-col gap-1' data-aos="flip-right">
                <label htmlFor='email'>Email</label>
                <input type="text"
                className='h-[40px] bg-transparent border border-gray-600' 
                id='email'/>
            </div>

            <div className='flex flex-col gap-1' data-aos="flip-right">
                <label htmlFor='msg'>Message</label>
                <textarea
                className='bg-transparent border border-gray-600' 
                id='msg' rows={8}>
                </textarea>
                <button className='bg-slate-600 p-2 px-6' data-aos="flip-right">Send</button>
            </div>

            
        </div>

      </div>
    </div>
  )
}

export default Contact
