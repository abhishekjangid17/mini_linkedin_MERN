// components/Navbar.jsx
const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#0a66c2',
      padding: '1rem',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
    }}>
      <div><strong>MiniLinkedIn</strong></div>
      <div>
        <input placeholder="Search..." style={{ padding: '0.3rem', borderRadius: '4px' }} />
      </div>
      <div>
        <a href="/profile/1" style={{ marginRight: '1rem', color: 'white' }}>Profile</a>
        <a href="/login" style={{ color: 'white' }} onClick={() => localStorage.removeItem('token')}>Logout</a>
      </div>
    </nav>
  )
}

export default Navbar
