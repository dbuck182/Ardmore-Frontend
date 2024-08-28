import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
function Login() {

    const [loginForm, setLoginForm] = useState({email: '', password: ''})
    const navigate = useNavigate();
    const tryLogin = async (event) => {
      event.preventDefault()
      console.log("Worked")
      try {
        const response = await fetch("http://ec2-44-201-79-47.compute-1.amazonaws.com:8080/auth/login",
        {method: 'POST',
        body: JSON.stringify(loginForm),
        headers : {
          "Content-type": "application/json"
        }
      }).then((response) => response.json())
      .then((data) => {
        setLoginForm({email: '', password: ''})
        sessionStorage.setItem("authToken", data.token)
        navigate("/admin")
      })
      
      } catch (error){
        console.log(error)
      }
      
    }

    const changeLogin = (event) => {
      const {name, value} = event.target

      setLoginForm({...loginForm, [name]: value})
      console.log(loginForm)
    }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen min-w-screen'>
        <div className='flex flex-col items-center'>
            <h2 className='text-2xl'>Admin Login</h2>
            <div className="border border-slate-300 flex flex-col justify-center items-center p-4">
                <form className='flex flex-col' onSubmit={tryLogin}>
                    <label htmlFor='email'>Email</label>
                    <input name="email" value={loginForm.email} className='bg-white border border-slate-300' onChange={changeLogin}></input>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name="password"className='bg-white border border-slate-300' onChange={changeLogin}></input>
                    <button type="submit">Login</button>
                </form>
                <Link to={'/'} className='text-sm'>return home</Link>
        </div>
        </div>
        
    </div>
    
  )
}

export default Login