import { 
  Navbar, 
  NavbarBrand, 
  Nav, 
  NavItem, 
  NavLink 
} from "reactstrap";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <>
        <Navbar color="light" expand="md">
          <Nav navbar>
            <NavbarBrand tag={Link} to="/">🐕‍🦺 🐩 DeShawn's Dog Walking</NavbarBrand>
            <NavItem>
              <NavLink tag={Link} to="/">Dogs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/walkers">Walkers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/cities">Cities</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <Outlet />
      </>
    </div>
  );
}

export default App;
