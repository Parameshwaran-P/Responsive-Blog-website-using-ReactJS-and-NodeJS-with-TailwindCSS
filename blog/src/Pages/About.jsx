import React from 'react'
import Ourmission from '../assets/our-mission.jpg'
import Ourtopic from '../assets/our-topic.jpg'
const About = () => {
  return (
    <div>
      <div className='py-40 bg-black text-white text-center px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5 font-primary'>About Page</h2>
        <p>Join us in shaping the future of knowledge sharing!</p>
      </div>
      <div className=''>
        <p className='px-20 mt-5 '>Welcome to <span className='font-bold '>Blogpsh</span>, a vibrant community of writers, experts, and enthusiasts sharing their knowledge and insights on a wide range of topics. We believe in the power of collaboration and diversity, which is why our platform welcomes contributions from individuals with diverse backgrounds, experiences, and perspectives.
        </p>
      <div className='px-4 mt-4'>
       <h2 className=' pl-16 underline font-primary'>Our Mission</h2>
       <div className=' md:flex'>
       <div className='md:w-1/2'>
       <p className='pl-16 pr-10 '>At <span className='font-bold '>Blogpsh</span>, our mission is to create a platform where ideas thrive, conversations flourish, and knowledge is shared openly. We strive to provide a space for writers to express themselves, readers to discover new perspectives, and contributors to engage with a global audience.</p>
       <h2 className='mt-2  pl-16 underline font-primary'>Passion and Values</h2>
       <p className='pl-16 pr-10 '>What drives me in this field is the constant learning and the opportunity to create impactful solutions that improve people's lives. I am passionate about staying updated with the latest technologies and best practices, ensuring that my projects are not only functional but also scalable and maintainable in the long run.</p>
       </div>
       <div className='w-1/2 mb-6'>
       <img src={Ourmission} alt="" className='h-[300px] w-[500px]'/>
       </div>
       </div>
       </div>

       <div className='px-4 mt-4'>
       <div className=' md:flex'>
       <div className='w-1/2 pl-30 mb-6'>
       <img src={Ourtopic} alt="" className='h-[300px] w-[550px] pl-16'/>
       </div>
       <div className='md:w-1/2'>
       <h2 className='underline font-primary'>Topics We Cover </h2>
       <p className='text-sm'>Our blog covers a diverse range of topics, including but not limited to:</p>
       <h3 className='pr-10 '><span className='font-bold '>Startups:</span> A startup or start-up is a company or project undertaken by an entrepreneur to seek, develop, and validate a scalable business model.</h3>
       <h3 className='pr-10 pt-2 '><span className='font-bold'>AI:</span> artificial intelligence (AI), the ability of a digital computer or computer-controlled robot to perform tasks commonly associated with intelligent beings.</h3>
       <h3 className='pr-10 pt-2 '><span className='font-bold'>Apps:</span> A mobile application or app is a computer program or software application designed to run on a mobile device such as a phone, tablet, or watch.</h3>
       <h3 className='pr-10 pt-2 '><span className='font-bold'>Tech:</span> Get the .Tech domain name of your choice for your technology startup, business, project or blog. It's the domain extension of the future!</h3>
       <p className='pr-10 pt-2 '>From technology trends to lifestyle tips, from business insights to creative inspiration, our contributors bring a wealth of knowledge and expertise to our platform.</p>
       </div>
       </div>
       </div>

       <div className=''>
        <h3 className='font-primary px-20 underline'>Join Our Community</h3>
        <p className='px-20 '>Are you passionate about sharing your ideas and expertise with a global audience? We invite writers, bloggers, and experts from all backgrounds to join our community and contribute to <span className='font-bold '>Blogpsh</span>. Whether you're an experienced writer or a budding enthusiast, there's a place for you here.</p>
       </div>

       <div className='py-2'>
        <h3 className='font-primary px-20 mt-5 underline'>Connect With Us</h3>
        <p className='px-20 font-secondry'>Thank you for visiting <span className='font-bold '>Blogpsh</span> and learning more about our community. We invite you to explore our articles, engage in discussions, and connect with us on social media pshblog@gmail.com. Together, let's create a space where ideas thrive and voices are heard.</p>
       </div>
       
      </div>
     
    </div>
  )
}

export default About