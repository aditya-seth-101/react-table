import React from 'react'

const ReadOnlyRow = (props) => {
  return (
    <><tr key={props.id}>
    <td>{props.item.name}</td>
    <td>{props.item.email}</td>
    <td>{props.item.phone}</td>
    <td> <button onClick={(event)=>props.editClick(event,props.item)}>Edit</button> /
        <button>Del</button>
    </td>
</tr></>
  )
}

export default ReadOnlyRow