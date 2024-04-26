import React from 'react'

const page = ({params}) => {
    
    const location = params.Id.replace(/%20/g, "_").replace(/_/g, " ")
    
  return (
    <div className='flex justify-center items-center h-screen'>
      <div>this books is : {location}</div>
    </div>
  );
}

export default page