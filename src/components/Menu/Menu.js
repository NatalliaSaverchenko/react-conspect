import { NavLink } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import './menu.css'
const Menu = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <NavLink className="menu-items" to="/">
            Home
          </NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <NavLink className="menu-items" to="/component">
            Class and function components
          </NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <NavLink className="menu-items" to="/props">
            Props
          </NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <NavLink className="menu-items" to="/state">
            State
          </NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <NavLink className="menu-items" to="/lifecycle">
            Lifecycle
          </NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <NavLink className="menu-items" to="/events">
            Events handling
          </NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <NavLink className="menu-items" to="/key">
            Key
          </NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <NavLink className="menu-items" to="/refs">
            Refs
          </NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <NavLink className="menu-items" to="/requests">
            Requests
          </NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <NavLink className="menu-items" to="/fragment">
            Fragment
          </NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <NavLink className="menu-items" to="/memo">
            Memo
          </NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <NavLink className="menu-items" to="/hooks">
            Hooks
          </NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <NavLink className="menu-items" to="/router">
            Router
          </NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <NavLink className="menu-items" to="/context">
            Context
          </NavLink>
        </Breadcrumb.Item>
      </Breadcrumb>

      {/* <ul className="navigation">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/class+function">Class and function components</NavLink>
        </li>
        <li>
          <NavLink to="/props">Props</NavLink>
        </li>
        <li>
          <NavLink to="/state">State</NavLink>
        </li>
        <li>
          <NavLink to="/lifecycle">Lifecycle</NavLink>
        </li>
        <li>
          <NavLink to="/events">Events handling</NavLink>
        </li>
        <li>
          <NavLink to="/key">Key</NavLink>
        </li>
        <li>
          <NavLink to="/refs">Refs</NavLink>
        </li>
        <li>
          <NavLink to="/requests">Requests</NavLink>
        </li>
        <li>
          <NavLink to="/fragment">Fragment</NavLink>
        </li>
        <li>
          <NavLink to="/memo">Memo</NavLink>
        </li>
        <li>
          <NavLink to="/hooks">Hooks</NavLink>
        </li>
        <li>
          <NavLink to="/router">Router</NavLink>
        </li>
        <li>
          <NavLink to="/context">Context</NavLink>
        </li>
      </ul> */}
    </>
  )
}
export default Menu
