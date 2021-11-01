import React, { useState } from 'react';
import './form.css'

function Form(props){
    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const [date, setDate] = useState('')

    function NameChangeHandler(e){
        setName(e.target.value)
    }

    function TextChangeHandler(e){
        setText(e.target.value)
    }

    function DateChangeHandler(e){
        setDate(e.target.value)
    }

    function SubmitHandler(e){
        e.preventDefault();
        let data = {
            name: name,
            comment: text,
            date: date
        }

        props.add(data)
        setDate('')
        setName('')
        setText('')
    }
    return(
        <div className='form-div'>
        <form onSubmit={() => {SubmitHandler()}}>
            <div className='form-box'>
                <h3>Оставить комментарий</h3>
                <h4>Имя</h4>
                <input type='text' onChange={(e) => NameChangeHandler(e)} value={name}/>
                <h4>Дата</h4>
                <input type='date' onChange={(e) => DateChangeHandler(e)} value={date}/>
                <h4>Комментарий</h4>
                <textarea type='text' onChange={(e) => TextChangeHandler(e)} value={text}/>
                <button className='button' type='submit' onClick={(e) => {SubmitHandler(e)}}>Добавить комментарий</button>
            </div>
            
        </form>
        </div>
    )
}
export default Form;