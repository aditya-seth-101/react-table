import React from 'react'

const EditablRow = (props) => {
  return (
    <>
        <tr>
            <td>
                <input type="text" required='required' value ={props.editRowData.name} name='fullName' placeholder='Enter Full Name' onChange={(e)=> {props.handelEditRowChanges(e)}}/>
            </td>
            <td>
            <input type="text" required='required' value ={props.editRowData.email} name='email' placeholder='Enter Mail id' onChange={(e)=> {props.handelEditRowChanges(e)}} />
            </td>
            <td>
            <input type="text" required='required' value ={props.editRowData.phone} name='phoneNo' placeholder='Enter Phone no.' onChange={(e)=> {props.handelEditRowChanges(e)}}/>
            </td>
            <td>
                <button type='submit'>Save</button>
            </td>
        </tr>
    </>
  )
}

export default EditablRow