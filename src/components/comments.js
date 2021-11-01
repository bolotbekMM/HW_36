import Form from './form/form';
import React, { useState } from 'react';
import './comments.css'

function Comment(props){
    let DATA = []
    const [data, setData] = useState(DATA)

    function addToData(newData){
      setData([
        ...data,
        newData
      ])
    }
    return(
    <div className='container'>
        <Form add={addToData}/>
        <div>
        {
            data.map(item => {
                return <div className='comments-box'>
                    <div>
                        <span className='User'>{item.name}</span>
                        <span>   {  item.date}</span>
                    </div>
                        <p>{item.comment}</p>
                    </div>
            })
        }
        </div>
    </div>
    )
}
export default Comment;
