import React from 'react'
import ContactForm from '@/components/contactpage/contactform';
import MyContact from '@/components/contactpage/mycontact';
const Contact = () => {
  return (
    <div>
        <div className='min-h-screen'>
            <div className='grid grid-cols-2 gap-x-10 mt-20'>
                <MyContact/>
                
                <div className=''>
                    <ContactForm/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact