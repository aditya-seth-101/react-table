import React from 'react'
import ReadOnlyRow from './ReadOnlyRow'
const TabelDisplay = (props) => {
  return (
    <>
        <table border={1}>
            <thead></thead>
            <tbody>
                {props.s.map(
                    (item) => (
                         <ReadOnlyRow item={item}/>
                    )
                )}
            </tbody>
        </table>
    </>
  )
}

export default TabelDisplay