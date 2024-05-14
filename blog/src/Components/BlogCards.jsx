import React from 'react'
import {Link} from 'react-router-dom'
import {FaUser} from 'react-icons/fa6'

const BlogCards = ({blogs, currentpage, selectcategory, pageSize}) => {
    const filtered = blogs
    .filter((blogs)=>!selectcategory || blogs.category === selectcategory)
    .slice((currentpage -1) * pageSize, currentpage * pageSize)
    console.log(filtered);
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
        {filtered.map((blog)=> <Link to={`/blogs/${blog.id}`} key={blog.id} className='p-5 shadow-2xl'>
            <div>
                <img src={blog.image} alt="" className='w-full'/>
                <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>{blog.title}</h3>
                <p className='mb-2 text-grey-600'><FaUser className='inline-flex'/>{blog.author}</p>
                <p className='text-sm'>Published: {blog.published_date}</p>
            </div>
        </Link>)}
    </div>
  )
}

export default BlogCards