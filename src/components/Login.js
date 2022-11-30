import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const history = useHistory()

  const Auth = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/login', {
        email: email,
        password: password,
      })
      history.push('/dashboard')
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  }

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
              {msg ? (<div class="alert alert-danger" role="alert">{msg}</div>) : ''}
              <form className='box' onSubmit={Auth}>

                <h1 className='title has-text-centered'>Login</h1>

                <div class="field mt-5">
                  <label class="label">email</label>
                  <div class="control has-icons-left has-icons-right">
                    <input class="input" type="text" placeholder="name"
                      value={email} onChange={(e) => setEmail(e.target.value)} />
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </div>
                </div>

                <div class="field mt-5">
                  <label class="label">Password</label>
                  <div class="control has-icons-left has-icons-right">
                    <input class="input" type="password" placeholder="Enter your password"
                      value={password} onChange={(e) => setPassword(e.target.value)} />
                    <span class="icon is-small is-left">
                      <i class="fas fa-key"></i>
                    </span>
                  </div>
                </div>
                <p>don't have an account? <a href="/register">Register</a></p>

                <div className="field mt-5">
                  <button className="button is-success is-fullwidth">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login