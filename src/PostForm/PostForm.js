import axios from 'axios';
import React, { useState } from 'react';

const PostForm = (props) =>{

    const inputStyle = {
        border: '2px solid red',
        height:'500px',
        width:'500px'
    };

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-type':'application/json'
      };

    const [formValue,setForm] = useState({
        body : 'Paste your chat here..'
      });

      const [responseValue,setResponse] = useState({
        responseData : 'Waiting..'
      });
      const changeHandler = (event) =>{
        
        setForm({[event.target.name] : event.target.value});
      };

      const submitHandler = e =>{
        e.preventDefault();
        console.log(formValue);
        axios.post('http://192.168.29.200:8080/summerEntertainment/sheets/update',formValue,{
            headers:headers
        })
        .then(response =>{
            console.log(response);
            setResponse({responseData:response.data})
        })
        .catch(error => {
            console.log(error);
        })
      };

    return(
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label >Chat Text:</label><br></br>
                    <textarea name = "body" style = {inputStyle} value={formValue.body} 
                    onChange={changeHandler}/><br></br>
                    <button type="submit">Submit</button>
                </div>
                <div>
                    <p>{responseValue.responseData}</p>
                </div>
            </form>
        </div>


    );

}
export default PostForm;