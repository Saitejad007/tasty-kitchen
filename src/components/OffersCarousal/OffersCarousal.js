import {Component} from 'react'
import Slider from 'react-slick'
import './styles.css'

class OffersCarousal extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    const {offersList} = this.props
    return (
      <Slider {...settings}>
        {offersList.map(eachItem => (
          <div testid="restaurants-list-loader" key={eachItem.id}>
            <img
              src={eachItem.image_url}
              alt="offer"
              className="carousal-img"
            />
          </div>
        ))}
      </Slider>
    )
  }
}

export default OffersCarousal
