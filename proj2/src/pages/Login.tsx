import React, { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { encrypt } from '../util'

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const fncLogin = (evt: FormEvent) => {
    evt.preventDefault()
    if (email !== '' && password !== '') {
      if (email === 'ahmet@gmail.com' && password === '12345') {
        //1.parametre ->key
        //2.parametre ->value
        //sessionStorage.setItem('user', email)
        const item = {
          email: email,
          name: 'Ahmet Emin Öztürk',
          phone: '555555555'
        }
        var stItem = JSON.stringify(item)
        stItem = encrypt(stItem)
        localStorage.setItem('user', stItem)
        navigate('/dashboard')
      }
      else {
        setErrorMessage('Kullanıcı adı veya şifre hatalıdır.')
      }
    }
    else {
      setErrorMessage("Lütfen tüm alanları doldurunuz!")
    }
  }
  return (
    <>
      <div className='mb-3'>
        <div className='row'>
          <div className=' col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-4 col-xxl-4'></div>
          <div className=' col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4'>
            <form onSubmit={fncLogin}>
              <h2>Admin Login</h2>

              {errorMessage!== '' &&
              <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Hata!</strong> {errorMessage}
                <button type="button" className="btn-close" onClick={()=> setErrorMessage('')}></button>
              </div>
              }

              <div className='mb-3'>
                <input required onChange={(evt) => setEmail(evt.target.value)} placeholder='E-Mail' type='email' className='form-control' />
              </div>
              <div className='mb-3'>
                <input required onChange={(evt) => setPassword(evt.target.value)} placeholder='Password' type='password' className='form-control' />
              </div>
              <button className='btn btn-success'>Send</button>
            </form>
          </div>
          <div className=' col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-4 col-xxl-4'></div>
        </div>
      </div>
    </>
  )
}

export default Login