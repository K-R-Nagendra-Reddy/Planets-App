// Write your code here
import './index.css'

const PlanetItem = props => {
  const {details} = props
  const {name, imageUrl, description} = details
  return (
    <div className="item-container">
      <h1 className="heading">PLANETS</h1>
      <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
      <h3 className="planet-name">{name}</h3>
      <p className="about">{description}</p>
    </div>
  )
}

export default PlanetItem
