import React, { useState } from 'react'
import EditablRow from './EditablRow'
import ReadOnlyRow from './ReadOnlyRow'

const TabelDisplay = (props) => {
    const [editRowId,setEditRowId] = useState(null)
    const [editRowData,setEditRowData]=useState({
        fullName:"",
        email : "",
        phoneNo : ''
    });
    const handelEditRowChanges = (e)=> {
        e.preventDefault();
        const fieldName = e.target.getAttribute('name')
        const fieldValue = e.target.value
        const newData = {...editRowData}
        newData[fieldName]=fieldValue
        setEditRowData(newData)
    }
    const handelEditSubmit =(e,item)=> {
        e.preventDefault()
        const updatedData= {
            id:editRowId,
            fullName:editRowData.name,
            email : editRowData.email,
            phoneNo : editRowData.phone
        }
        const newItems=[...item]
        const index = item.findIndex((item) => item.id === editRowId)
        newItems[index] =updatedData
        
    }


    const editClick =(e,item)=> {
        e.preventDefault()
        setEditRowId(item.id)
        const formValues={
            fullName:item.name,
            email : item.email,
            phoneNo : item.phone
        }
        setEditRowData(formValues)
    }
    return (
        <>
            <form onSubmit={handelEditSubmit}>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.s.map(
                            (item) => (
                                <>
                                {editRowId ===item.id ?  <EditablRow editRowData={editRowData} handelEditRowChanges={handelEditRowChanges}/>:    <ReadOnlyRow item={item} editClick={editClick}/>}
                                   
                                </>
                            )
                        )}
                    </tbody>
                </table>
            </form>
        </>
    )
}

export default TabelDisplay