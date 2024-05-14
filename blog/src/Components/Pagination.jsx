import React from 'react'

const Pagination = ({onPageChange, currentpage, blogs, pageSize}) => {
  const totalPage = Math.ceil(blogs.length/pageSize)

  const renderPagination = () => {
    return Array.from({length: totalPage}, (_, i) => i + 1).map((pageNum)=>(
      <li className={pageNum === currentpage ? "activePagination" : ""} key={pageNum}>
        <a href="#" onClick={()=>onPageChange(pageNum)}>{pageNum}</a>
      </li>
    ))
  }
  return (
    <ul className='pagination my-8 flex-wrap gap-4'>
      <li>
        <button onClick={()=>{onPageChange(currentpage -1)}} disabled={currentpage===1}>Previous</button>
      </li>
      <div className='flex gap-1'>{renderPagination()}</div>
      <li>
        <button onClick={()=>{onPageChange(currentpage +1)}} disabled={currentpage===totalPage}>Next</button>
      </li> 
    </ul>
  )
}

export default Pagination   