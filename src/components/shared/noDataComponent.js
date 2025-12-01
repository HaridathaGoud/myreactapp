import React from 'react'
import nodata from '../../assets/images/no-data.png';
const NoData = ({text,image}) => {
  return (
    <div className='nodata-content'>
          <div className='text-center'>
            <img src={image || nodata} width={100} className='mx-auto' alt="No Data"></img>
            <p className='mb-0 font-medium text-addonColor mt-2'>{text || "No Data Available"}</p>
          </div>
        </div>
  )
}

export default NoData