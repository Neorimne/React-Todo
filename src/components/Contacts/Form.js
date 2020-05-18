import React from 'react';
import style from './contacts.module.css';


const FeedbackForm = (props) => {
    return (
        <form onSubmit={props.handleSumbit} className={style.form} >
                    <label>
                        <div>YOUR NAME:</div>
                        <input type="text" name="name" value={props.name} onChange={props.handleUserInput}/>
                    </label>
                    <label>
                        <div>YOUR EMAIL:</div>
                        <input type="text" name="email" value={props.email} onChange={props.handleUserInput} />
                    </label>
                    <label>
                        <div>YOUR COMMENT:</div>
                        <textarea rows="10" cols="50" name="comment" value={props.comment} onChange={props.handleUserInput}/>
                    </label>
                    <input type="submit" value="SUBMIT" />
        </form>
    )
}



export default FeedbackForm;