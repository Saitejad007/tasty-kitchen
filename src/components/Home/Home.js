import {Component} from 'react'
import Cookies from 'js-cookie'
import Navbar from '../Navbar/Navbar'
import OffersCarousal from '../OffersCarousal/OffersCarousal'
import PopularRestaurants from '../PopularRestaurants/PopularRestaurants'
import './Home.css'

class Home extends Component {
  state = {offersList: []}

  componentDidMount() {
    this.getOffers()
  }

  getOffers = async () => {
    const jwtToken = await Cookies.get('jwt_token')
    const offersUrl = 'https://apis.ccbp.in/restaurants-list/offers'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(offersUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.setState({offersList: data.offers})
    }
    console.log(data.offers)
  }

  render() {
    const {offersList} = this.state
    return (
      <div className="homepage">
        <Navbar />
        <OffersCarousal
          offersList={offersList}
          testid="restaurants-offers-loader"
        />
        <PopularRestaurants />
      </div>
    )
  }
}

export default Home
