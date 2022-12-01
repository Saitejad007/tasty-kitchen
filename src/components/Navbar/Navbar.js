import {BiMenu} from 'react-icons/bi'
import {IoCloseCircleSharp} from 'react-icons/io5'
import './Navbar.css'
import {Link, withRouter} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'

class Navbar extends Component {
  state = {menuStatus: false}

  clickToToggleMenu = () => {
    this.setState(prevState => ({
      menuStatus: !prevState.menuStatus,
    }))
  }

  onLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    const {menuStatus} = this.state
    // console.log(menuStatus)
    return (
      <nav>
        <div className="mobile-view-navbar">
          <div className="logo-container">
            <header className="header-container">
              <img
                src="https://res.cloudinary.com/dzdh52ops/image/upload/v1669274780/Tasty%20Kitchen/Desktop%20View%20Resources/Logo_moshs2.png"
                alt="website logo"
                className="navbar-logo"
              />
              <h1 className="logo-description">Tasty Kitchens</h1>
            </header>
            <BiMenu className="menu" onClick={this.clickToToggleMenu} />
          </div>
          {menuStatus ? (
            <div className="show-menu">
              <div className="nav-options">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/cart" className="nav-link">
                  Cart
                </Link>
                <button
                  type="button"
                  className="logout-button"
                  onClick={this.onLogout}
                >
                  Logout
                </button>
              </div>
              <IoCloseCircleSharp
                className="close"
                onClick={this.clickToToggleMenu}
              />
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="desktop-view-navbar">
          <div className="alignment-container">
            <header className="header-container">
              <img
                src="https://res.cloudinary.com/dzdh52ops/image/upload/v1669274780/Tasty%20Kitchen/Desktop%20View%20Resources/Logo_moshs2.png"
                alt="website logo"
                className="navbar-logo"
              />
              <h1 className="logo-description">Tasty Kitchens</h1>
            </header>
            <div className="nav-options">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/cart" className="nav-link">
                Cart
              </Link>

              <button
                type="button"
                className="logout-button"
                onClick={this.onLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)
