import React, { useState } from 'react'
import axios from "axios";

export default function Registration() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSave1 = () =>{
      axios.post('http://localhost:3000/Home', {
        UserLogin: login,
        Password: password,
        role : 1,
        Money : 1500,
      }).then((res) => {
        //localStorage.setItem('token', res.data.token);
        window.location.href = '/Home';
      }).catch((err) => {
        window.location.href = '/Home';
        console.error(err);
        alert(err);
      });
      }

    return (
      <div className='registration'>
        <form className='form'>
          <h1 className='form_title'>Вход</h1>
          <div className='form_group'>
          <input className='form_input' name='login' type='text' placeholder='логин' />
          </div>
          <div className='form_group'>
          <input className='form_input' name='password' type='text' placeholder='пароль' />
          </div>
          <button className='form_button' type='submit' onClick={() => handleSave1()} >Войти</button>
        </form>
      </div>
    )
}