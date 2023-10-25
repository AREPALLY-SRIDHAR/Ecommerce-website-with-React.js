import './Item.css'

const Item = props => {
  const {appDetails,popup} = props
  const {appName, imageUrl} = appDetails

  const Details=()=>{
    popup(appDetails)
  }

  return (
    <li className='app-item' >
    <button className='item-button' onClick={Details}>
      <img className="app-image" src={imageUrl} alt={appName} />
      <p className="app-name">{appName}</p></button>
    </li>
  )
}

export default Item
