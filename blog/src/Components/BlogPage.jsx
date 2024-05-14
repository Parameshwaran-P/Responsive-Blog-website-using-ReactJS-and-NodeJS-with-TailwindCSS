import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import Sidebar from './Sidebar';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([])
  const [currentpage, setCurrentpage] = useState(1)
  const pageSize =12
  const [selectcategory, setSelectCategory] = useState(null); 
  const [activeCategory, setActivecategory] = useState(null)
  useEffect(()=>{
    async function fetchBlog(){
     let url=`http://localhost:5000/blogs?page=${currentpage}&limit=${pageSize}`;
     
      if(selectcategory){
        url +=`&category=${selectcategory}`;
      }
     const response = await fetch(url)
     const data = await response.json();
     
     setBlogs(data)
    }
    fetchBlog();
  },[currentpage, selectcategory, pageSize])

  const handlePagechange = (pageNum) =>{
    setCurrentpage(pageNum)
  }

  const handleChangeCategory = (category)=>{
    setSelectCategory(category)
    setCurrentpage(1)
    setActivecategory(category)
  }
  return (
    <div>
      {/* Category */}
      <div><CategorySelection onSelectCategory={handleChangeCategory} selectcategory={selectcategory} activeCategory={activeCategory}/></div>
      {/* blogcards */}
      <div className='flex flex-col lg:flex-row gap-12 '>
        <BlogCards blogs={blogs} currentpage={currentpage} selectcategory={selectcategory} pageSize={pageSize}/>
      
      {/* Sidebar */}
      <div>
       <Sidebar/>
      </div>
      </div>
      {/* page section */}
      <div>
        <Pagination onPageChange={handlePagechange} currentpage={currentpage} blogs={blogs} pageSize={pageSize}/>
        </div>
    </div>
  )
}

export default BlogPage