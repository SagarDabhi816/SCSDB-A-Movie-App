import React from 'react'

const Dropdown = ({ title, options ,func }) => {
  return (
    <div className='select'>
        <select defaultValue={0} name='format' id='format' onChange={func}>
            <option value={0} disabled>
                {title}
            </option>
           {options.map((val,i)=>(
            <option value={val} key={i}>{val.charAt(0).toUpperCase() + val.slice(1)} </option>
           ))}
        </select>
    </div>
  )
}

export default Dropdown
