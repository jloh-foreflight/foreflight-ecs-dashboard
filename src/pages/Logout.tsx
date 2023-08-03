import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


export default function Logout() {
    return (
      <>
        <div className='flex flex-col justify-center align-middle m-4'>

          <h1>You have been logged out</h1>
          <br></br>
          <h2>Click <Link to="/">here</Link> to log back in</h2>
          
        </div>
      </>
    )
  }
  