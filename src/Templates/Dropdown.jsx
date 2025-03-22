import React from 'react'

function Dropdown({title,options,func}) {
  return (
    <div className='select  bg-white p-2 text-xl    '>
<select defaultValue="0" onChange={func} name="format" id="format">
    <option value="0" disabled>{title} </option>

    {options.map((opp,i)=>(<option key={i} value={opp}>{opp.toUpperCase()}</option>))}
</select>
    </div>
  )
}

export default Dropdown