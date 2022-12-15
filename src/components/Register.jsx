import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";

const Register = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')
  const [msg, setMsg] = useState('')
  const history = useHistory()

  const Register = async (e) => {
    e.preventDefault()
    try {
      await axios.post('https://clear-eel-jersey.cyclic.app/users', {
        // await axios.post('http://localhost:5000/users', {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword
      })
      history.push('/')
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
              <form className='box' onSubmit={Register}>

                <h1 className='title has-text-centered'>Register</h1>

                <div class="field mt-2">
                  <label class="label">name</label>
                  <div class="control">
                    <input class="input" type="text" placeholder="your name"
                      value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                </div>

                <div class="field mt-2">
                  <label class="label">Email</label>
                  <div class="control">
                    <input class="input" type="text" placeholder="your email"
                      value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>

                <div class="field mt-2">
                  <label class="label">Password</label>
                  <div class="control">
                    <input class="input" type="password" placeholder="your password"
                      value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </div>

                <div class="field mt-2">
                  <label class="label">Confirm Password</label>
                  <div class="control">
                    <input class="input" type="password" placeholder="you confirm password"
                      value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                  </div>
                </div>

                <div className="field mt-2">
                  <button className="button is-success is-fullwidth">Register</button>
                </div>

                <p>already have an account ? <a href="/">Login</a></p>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register