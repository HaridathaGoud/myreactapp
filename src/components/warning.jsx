import React from 'react'
import NoData from './shared/noDataComponent'
import '../styles.css'; // optional helper CSS (below)

const Warning = () => {
  return (
    <div className='no-data-center'>
      <NoData text="No Data Available" />
    </div>
  )
}

export default Warning