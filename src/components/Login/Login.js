import {Component} from 'react'
import './Login.css'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

class Login extends Component {
  state = {
    username: '',
    password: '',
    formError: false,
    errorMsg: '',
  }

  submitFrom = async e => {
    const {history} = this.props
    const {username, password} = this.state
    e.preventDefault()
    const loginUrl = 'https://apis.ccbp.in/login'

    const response = await fetch(loginUrl, {
      method: 'POST',
      body: JSON.stringify({username, password}),
    })
    const jsonData = await response.json()
    console.log(jsonData)

    if (response.ok) {
      Cookies.set('jwt_token', jsonData.jwt_token, {expires: 30})
      history.replace('/')
    } else {
      this.setState({formError: true, errorMsg: jsonData.error_msg})
    }
  }

  getUsername = e => {
    this.setState({username: e.target.value})
  }

  getPassword = e => {
    this.setState({password: e.target.value})
  }

  render() {
    const {username, password, formError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-page">
        <div className="logo-container-mobile">
          <img
            src="https://res.cloudinary.com/dzdh52ops/image/upload/v1669212424/Tasty%20Kitchen/Mobile%20View%20Resource/Login-img_gxccqk.png"
            alt="website login"
            className="website-login-image-mobile"
          />
          <h1 className="login-title-mobile">Login</h1>
        </div>
        {/* Mobile view of login form */}
        <div className="form-container">
          <form className="form" onSubmit={this.submitFrom}>
            <section className="desktop-logo-container">
              <img
                src="https://res.cloudinary.com/dzdh52ops/image/upload/v1669274780/Tasty%20Kitchen/Desktop%20View%20Resources/Logo_moshs2.png"
                alt="website logo"
              />
              <h1 className="logo-description">Tasty Kitchens</h1>
              <h1 className="login-title-desktop">Login</h1>
            </section>
            <div className="input-field">
              <label htmlFor="userName" className="label">
                Username
              </label>
              <input
                type="text"
                id="userName"
                value={username}
                onChange={this.getUsername}
                placeholder="USERNAME"
                className="input"
              />
            </div>
            <div className="input-field">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                className="input"
                type="password"
                id="password"
                value={password}
                placeholder="PASSWORD"
                onChange={this.getPassword}
              />
              {formError ? <p className="error-msg">{errorMsg}</p> : ''}
            </div>

            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
        <img
          src="https://res.cloudinary.com/dzdh52ops/image/upload/v1669274607/Tasty%20Kitchen/Desktop%20View%20Resources/Login-desktop_o9u8a9.png"
          alt="website login"
          className="website-login-image-desktop"
        />
      </div>
    )
  }
}

export default Login
