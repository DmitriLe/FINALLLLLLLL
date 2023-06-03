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
          <h1 className='form_title'>Добавление товара</h1>
          
          <div className='form_group'>
          <input className='form_input' name='login' type='text' placeholder='Название' />
          </div>
          
          <div className='form_group'>
          <input className='form_input' name='login' type='text' placeholder='Описание' />
          </div>

          <div className='form_group'>
          <input className='form_input' name='login' type='text' placeholder='Автор' />
          </div>

          <div className='form_group'>
          <input className='form_input' name='login' type='text' placeholder='Дата издания' />
          </div>

          <div className='form_group'>
          <input className='form_input' name='login' type='text' placeholder='Жанр' />
          </div>

          <div className='form_group'>
          <input className='form_input' name='login' type='text' placeholder='Цена' />
          </div>

          <div className='form_group'>
          <input className='form_input' name='login' type='text' placeholder='Длинна' />
          </div>

          
          <button className='form_button' type='submit' onClick={() => handleSave1()}>Добавить</button>
        </form>
      </div>
    )
}