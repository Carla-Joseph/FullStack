import React, { Component } from 'react'
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap'
import { Link } from 'react-router-dom'
import './style.scss'
import { isLoggedIn, logout } from '../../auth'

const handleClickSearch = event => {
  console.log('Searched')
}

const handleLogout = () => {
  logout()

  window.location = '/'
}

export class NavMenu extends Component {
  static displayName = NavMenu.name

  constructor(props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true,
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  handleSearchChanged(searchValue) {
    this.props.setSearchValue(searchValue)
  }

  render() {
    return (
      <header>
        <Navbar
          className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
          light
        >
          <Container>
            <NavbarBrand tag={Link} to="/" className="logo">
              🏀 FullStack
            </NavbarBrand>
            <NavLink tag={Link} className="text-dark" to="/">
              Home
            </NavLink>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse
              className="d-sm-inline-flex flex-sm-row-reverse"
              isOpen={!this.state.collapsed}
              navbar
            >
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <form className="navbar-form navbar-left" role="search">
                    <div className="mr-3">
                      <input
                        type="text"
                        className="form-control "
                        placeholder="Search"
                        onChange={event =>
                          this.handleSearchChanged(event.target.value)
                        }
                      />
                    </div>
                    {/* <button
                      type="submit"
                      className="btn btn-primary mr-2"
                      onClick="{handleClickSearch}"
                    >
                      Submit
                    </button> */}

                    {!isLoggedIn() && (
                      <Link className="btn btn-primary mr-2" to="/signup">
                        Sign Up
                      </Link>
                    )}
                    {!isLoggedIn() && (
                      <Link className="btn btn-primary mr-2" to="/signin">
                        Sign In
                      </Link>
                    )}
                  </form>
                </NavItem>
                <NavItem>
                  {isLoggedIn() && (
                    <NavLink tag={Link} className="text-dark" to="/players">
                      Players
                    </NavLink>
                  )}
                </NavItem>
                <NavItem>
                  {isLoggedIn() && (
                    <NavLink tag={Link} className="text-dark" to="/addplayer">
                      Add Players
                    </NavLink>
                  )}
                </NavItem>
              </ul>
            </Collapse>
          </Container>
          {isLoggedIn() && (
            <span className="btn btn-primary" onClick={handleLogout}>
              Sign out
            </span>
          )}
        </Navbar>
      </header>
    )
  }
}
