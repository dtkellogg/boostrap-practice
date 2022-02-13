import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Container, Navbar, Nav, Dropdown, DropdownButton } from 'react-bootstrap'

// Components

import Alerts from './components/Alerts'
import Btns from './components/Btns'
import Cards from './components/Cards'
import Dropdowns from './components/Dropdowns'
import Navs from './components/Navs'
import Spinners from './components/Spinners'


function App() {
  const location = useLocation()

  return (
    <Container fluid className="vh-100 vw-100 p-0">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Bootstrap Practice</Navbar.Brand>
          <Nav>
            <Dropdown className="my-3">
              <DropdownButton id="dropdown-basic-button" title="Topics" variant="primary" size="lg" align="end">
                <Dropdown.Header>Components</Dropdown.Header>
                <Dropdown.Item href="/alerts">Alerts</Dropdown.Item>
                <Dropdown.Item href="/btns">Btns</Dropdown.Item>
                <Dropdown.Item href="/cards">Cards</Dropdown.Item>
                <Dropdown.Item href="/dropdowns">Dropdowns</Dropdown.Item>
                <Dropdown.Item href="/navs">Navs</Dropdown.Item>
                <Dropdown.Item href="/spinners">Spinners</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Other</Dropdown.Header>
              </DropdownButton>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>

      <Routes location={location}>
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/btns" element={<Btns />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/dropdowns" element={<Dropdowns />} />
        <Route path="/navs" element={<Navs />} />
        <Route path="/spinners" element={<Spinners />} />
      </Routes>
    </Container>
  );
}

export default App;