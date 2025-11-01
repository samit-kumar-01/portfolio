import React from 'react'
import ContactForm from './Form'
import EmailIcon from '../assets/EmailIcon'
import PhoneIcon from '../assets/PhoneIcon'
import LinkedInIcon from '../assets/LinkedIn'

const Contact = () => {
  return (
  <footer id='contact' className='w-full mt-8 px-4 py-12 pt-20'>
      <div className='max-w-5xl mx-auto'>

        {/* Heading */}
        <div className='text-center mb-8'>
          <h2 className='text-3xl sm:text-4xl font-bold text-white'>Connect With Me 🚀</h2>
        </div>

        {/* Contact Form */}
        <div className='mb-10 flex justify-center'>
          <div className='w-full max-w-2xl'>
            <ContactForm />
          </div>
        </div>

        {/* Contact Info */}
        <div className='flex flex-col sm:flex-row items-center justify-between text-white gap-4 border-t border-gray-700 pt-6 text-sm sm:text-base'>
          <div className='flex items-center gap-2'>
            <EmailIcon className='w-5 h-5 text-purple-400' />
            <span>samit7aug@gmail.com</span>
          </div>

          <div className='flex items-center gap-2'>
            <PhoneIcon className='w-5 h-5 text-purple-400' />
            <span>7091704051</span>
          </div>

          <div className='flex items-center gap-2'>
            <a href="https://www.linkedin.com/in/samit-kumar-10-august"><LinkedInIcon className='w-5 h-5 text-purple-400' /></a>
            <span>Samit Kumar</span>
          </div>
        </div>

        {/* Copyright */}
        <div className='text-center text-gray-400 text-sm mt-8'>
          <p>&copy; {new Date().getFullYear()} Samit Kumar. All rights reserved.</p>
        </div>
        
      </div>
    </footer>
  )
}

export default Contact
// import React from 'react';
// import ContactForm from './ContactForm';
// import EmailIcon from './EmailIcon';
// import PhoneIcon from './PhoneIcon';
// import LinkedInIcon from './LinkedInIcon';

// const Contact = () => {
//   return (
//     <footer className='w-full bg-[#0f172a] px-4 py-12'>
//       <div className='max-w-5xl mx-auto'>

//         {/* Heading */}
//         <div className='text-center mb-8'>
//           <h2 className='text-3xl sm:text-4xl font-bold text-white'>Connect With Me 🚀</h2>
//         </div>

//         {/* Contact Form */}
//         <div className='mb-10 flex justify-center'>
//           <div className='w-full max-w-2xl'>
//             <ContactForm />
//           </div>
//         </div>

//         {/* Contact Info */}
//         <div className='flex flex-col sm:flex-row items-center justify-between text-white gap-4 border-t border-gray-700 pt-6 text-sm sm:text-base'>
//           <div className='flex items-center gap-2'>
//             <EmailIcon className='w-5 h-5 text-purple-400' />
//             <span>samit7aug@gmail.com</span>
//           </div>

//           <div className='flex items-center gap-2'>
//             <PhoneIcon className='w-5 h-5 text-purple-400' />
//             <span>7091704051</span>
//           </div>

//           <div className='flex items-center gap-2'>
//             <LinkedInIcon className='w-5 h-5 text-purple-400' />
//             <span>Samit Kumar</span>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className='text-center text-gray-400 text-sm mt-8'>
//           <p>&copy; {new Date().getFullYear()} Samit Kumar. All rights reserved.</p>
//         </div>
        
//       </div>
//     </footer>
//   );
// };

// export default Contact;

