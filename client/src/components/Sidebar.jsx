 import React from "react"
 import ProfileImg from '../assets/702819.jpg'
const Sidebar = () => {
  return (
    <div style={{
      width: '250px',
      borderRight: '1px solid #ddd',
      padding: '1rem',
    }}>
      <div style={{ textAlign: 'center' }}>
        <img src={ProfileImg} alt="Profile" style={{ borderRadius: '5%', height:"100px" }} />
        <h4>I_Want_Russian</h4>
        <p>Software Developer</p>
      </div>
      <hr />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><a href="/">Home</a></li>
        <li><a href="/profile/1">My Profile</a></li>
        <li><a href="#">Connections</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </div>
  )
}

export default Sidebar
