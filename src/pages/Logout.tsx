import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


export default function Logout() {
    return (
      <>
        <div className='flex flex-col justify-center align-middle m-4'>
          <span className="fs-5 ">You have been signed out</span>
          <br></br>
          <span className="fs-5 ">Click <Link to="/">here</Link> to log back in</span>
        </div>
      </>
    )
  }
  