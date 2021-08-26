import './header.css'
import { Divider } from 'antd'
import Menu from '../Menu/Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <FontAwesomeIcon className="logo-svg" icon={faReact} />
          <div>React</div>
        </div>
        <nav>
          <Menu />
        </nav>
      </header>
      <Divider />
    </>
  )
}
export default Header
