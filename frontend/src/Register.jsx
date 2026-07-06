import './Css/register.css'
import { Link } from 'react-router-dom';

function Register() {

  const handleRegister = (e) => {

    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password || !name) {
      alert('Please fill all the required fields');
      return;
    }

    fetch(`${import.meta.env.VITE_REQUEST_TO_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'error') {
          alert(data.data.message);
          return;
        }

        window.location.href = '/login';
      });
  };

  return (
    <>

      <div className='login-wrapper'>
        <div className="login-container">
          <div className="form-title">
            <img src="/public/favicon1/favicon-32x32.png" />
            <h1>Sign Up</h1>
          </div>
          <form action="">
            <div className="input-container">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                name="name"
                id="name"
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email</label>
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
              <label htmlFor="password">Password</label>
              <input
                type="password"
                autoComplete="current-password"
                placeholder="Enter Your Password"
                name="password"
                id="password"
                required
              />
            </div>
            <div className="btn-container">
              <div className="submit-btn">
                <button type="button" id="login" onClick={handleRegister}>Sign up</button>
              </div>
              <div className="orsignuptext">
                <span> Or signup with </span>
                <i></i>
              </div>
            </div>
            <div className="redirect-link">
              <div>
                <p>Already Have An Account? <Link to="/login">Sign in</Link></p>
              </div>
            </div>
          </form>
        </div>
      </div>

      <script src="./js/Register.js"></script>
    </>

  )
}

export default Register


