import React from 'react'
import Collabrativeimg from '../assets/collabrative.jpg'
import Content from '../assets/content.jpg'
import Blog from '../assets/blog.jpg'
function Collabrative() {
    
  
  return (
    <div>
    <div>
        <div>
          <h2 className='font-bold text-2xl mt-4 mb-3 px-5'>Welcome to our collabrative Blogging platform</h2>
          <div className='text-sm px-5'>
            <p>At <span className='font-bold'>Blogpsh</span>, we believe in the power of collective knowledge and diverse perspectives.
              Our blogging platform provides a space for passionate writers, experts, and enthusiasts to share their insights,
              stories, and expertise with a global audience. Whether you're a seasoned blogger or just starting,
              our platform offers the tools and support you need to thrive.</p>
          </div>
          <div>
          <img className='px-5' src={Blog} alt="" />
          </div>
          
          
          <div className='text-sm px-5'>
            <h2 className='font-bold text-2xl mt-4 mb-3 px-1'>Content Submission</h2>
            <p className='px-2'>Easily submit and publish your blog posts directly on our platform.
              Benefit from our intuitive submission process and editorial support for polished content.
            </p>
            <div>
              <img className='px-5' src={Content} alt="" />
            </div>
          </div>
          
          <div className='text-sm px-5'>
            <h2 className='font-bold text-2xl mt-4 mb-3 px-1'>Collaborative Environment:</h2>
            <p>Engage with a diverse community of authors, share insights, and collaborate on joint projects.
            Explore opportunities for guest posts, cross-promotion, and networking within our community.

            </p>
            <div>
            <img className='px-5' src={Collabrativeimg} alt="" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collabrative