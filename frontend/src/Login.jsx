import Cookies from "universal-cookie";
import './Css/login.css'
import { Link } from 'react-router-dom';
function Login() {

  const cookies = new Cookies();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
      alert('Please fill all the required fields');
      return;
    }

    fetch(`${import.meta.env.VITE_REQUEST_TO_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'error') {
          alert(data.data.message);
          return;
        }
        cookies.set("token", data.data.token, { path: "/" });
        console.log(cookies.getAll())
        window.location.href = '/home';
      });
  };

  return (
    <>
      <div className='login-wrapper'>
        <div className="login-container">
          <div className="form-title">
            <img src="/public/favicon1/favicon-32x32.png" />
            <h1>Sign In</h1>
          </div>
          <form action="">
            <div className="input-container">
              <label htmlFor="">Email</label>
              <input
                type="email"
                autoComplete="email"
                placeholder="Enter Your Email"
                name="email"
                id="email"
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="">Password</label>
              <input
                type="password"
                autoComplete="current-password"
                placeholder="Enter Your Password"
                name="password"
                id="password"
                required
              />
              <div className="forgot-password">
                <a href="./forgot-password.html">Forgot Password?</a>
              </div>
            </div>
            <div className="btn-container">
              <div className="submit-btn">
                <button type="button" id="login" onClick={handleLogin}>Sign in</button>
              </div>
            </div>
            <div className="redirect-link">
              <div>
                <p>Don&apos;t Have Account? <Link to="/register">Register</Link></p>
              </div>
            </div>
          </form>
        </div>
      </div>

      <script src="./js/Login.js"></script>
    </>

  )
}

export default Login

