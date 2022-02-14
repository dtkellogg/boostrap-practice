import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Container, Navbar, Nav, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap'

// Layout

import Grid from './components/layout/Grid'
import Stack from './components/layout/Stack'

// Froms


// Components

import Accordians from './components/components/Accordians'
import Alerts from './components/components/Alerts'
import Badges from './components/components/Badges'
import Breadcrumbs from './components/components/Breadcrumbs'
import BtnGroups from './components/components/BtnGroups'
import Btns from './components/components/Btns'
import Cards from './components/components/Cards'
import Carousels from './components/components/Carousels'
import CloseBtns from './components/components/CloseBtns'
import Dropdowns from './components/components/Dropdowns'
import Figures from './components/components/Figures'
import Images from './components/components/Images'
import ListGroups from './components/components/ListGroups'
import Modals from './components/components/Modals'
import Navs from './components/components/Navs'
import Offcanvases from './components/components/Offcanvases'
import Overlays from './components/components/Overlays'
import Paginations from './components/components/Paginations'
import Placeholders from './components/components/Placeholders'
import Popovers from './components/components/Popovers'
import Progresses from './components/components/Progresses'
import Spinners from './components/components/Spinners'
import Tables from './components/components/Tables'
import Tabs from './components/components/Tabs'
import Toasts from './components/components/Toasts'
import Tooltips from './components/components/Tooltips'

// Utilities

import Ratio from './components/utilities/Ratio'
import RestartUI from './components/utilities/RestartUI'
import Transitions from './components/utilities/Transitions'

import Background from './components/utilities/Background'
import Borders from './components/utilities/Borders'
import Colors from './components/utilities/Colors'
import Display from './components/utilities/Display'
import Position from './components/utilities/Position'
import Sizing from './components/utilities/Sizing'
import Spacing from './components/utilities/Spacing'
import Text from './components/utilities/Text'



function App() {
  const location = useLocation()

  return (
    <Container fluid className="vh-100 vw-100 p-0">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Bootstrap Practice</Navbar.Brand>
          <Nav>
            <ButtonGroup>
              
              <Dropdown className="my-3">
                <DropdownButton id="dropdown-basic-button" title="Layouts" variant="light" size="lg" align="end">
                  <Dropdown.Item href="/grid">Grid</Dropdown.Item>
                  <Dropdown.Item href="/stack">Stack</Dropdown.Item>
                </DropdownButton>
              </Dropdown>

              <Dropdown className="m-3">
                <DropdownButton id="dropdown-basic-button" title="Components" variant="info" size="lg" align="end">
                  <Dropdown.Item href="/accordians">Accordians</Dropdown.Item>
                  <Dropdown.Item href="/alerts">Alerts</Dropdown.Item>
                  <Dropdown.Item href="/badges">Badges</Dropdown.Item>
                  <Dropdown.Item href="/breadcrumbs">Bread Crumbs</Dropdown.Item>
                  <Dropdown.Item href="/btn-groups">BtnGroups</Dropdown.Item>
                  <Dropdown.Item href="/btns">Btns</Dropdown.Item>
                  <Dropdown.Item href="/cards">Cards</Dropdown.Item>
                  <Dropdown.Item href="/carousels">Carousels</Dropdown.Item>
                  <Dropdown.Item href="/close-btns">Close Btns</Dropdown.Item>
                  <Dropdown.Item href="/dropdowns">Dropdowns</Dropdown.Item>
                  <Dropdown.Item href="/figures">Figures</Dropdown.Item>
                  <Dropdown.Item href="/images">Images</Dropdown.Item>
                  <Dropdown.Item href="/list-groups">List Groups</Dropdown.Item>
                  <Dropdown.Item href="/modals">Modals</Dropdown.Item>
                  <Dropdown.Item href="/navs">Navs</Dropdown.Item>
                  <Dropdown.Item href="/offcanvases">Offcanvases</Dropdown.Item>
                  <Dropdown.Item href="/overlays">Overlays</Dropdown.Item>
                  <Dropdown.Item href="/paginations">Paginations</Dropdown.Item>
                  <Dropdown.Item href="/placeholders">Placeholders</Dropdown.Item>
                  <Dropdown.Item href="/popovers">Popovers</Dropdown.Item>
                  <Dropdown.Item href="/progresses">Progresses</Dropdown.Item>
                  <Dropdown.Item href="/spinners">Spinners</Dropdown.Item>
                  <Dropdown.Item href="/tables">Tables</Dropdown.Item>
                  <Dropdown.Item href="/tabs">Tabs</Dropdown.Item>
                  <Dropdown.Item href="/toasts">Toasts</Dropdown.Item>
                  <Dropdown.Item href="/tooltips">Tooltips</Dropdown.Item>
                </DropdownButton>
              </Dropdown>

              <Dropdown className="my-3">
                <DropdownButton id="dropdown-basic-button" title="Utils" variant="outline-primary" size="lg" align="end">

                  <Dropdown.Header>Docs</Dropdown.Header>
                  <Dropdown.Item href="/ratio">Ratio</Dropdown.Item>
                  <Dropdown.Item href="/restart-ui">@restart/ui</Dropdown.Item>
                  <Dropdown.Item href="/transitions">Transitions</Dropdown.Item>
                  <Dropdown.Divider />

                  <Dropdown.Header>Unofficial Docs</Dropdown.Header>
                  <Dropdown.Item href="/background">Background</Dropdown.Item>
                  <Dropdown.Item href="/borders">Borders</Dropdown.Item>
                  <Dropdown.Item href="/colors">Colors</Dropdown.Item>
                  <Dropdown.Item href="/display">Display</Dropdown.Item>
                  <Dropdown.Item href="/position">Position</Dropdown.Item>
                  <Dropdown.Item href="/sizing">Sizing</Dropdown.Item>
                  <Dropdown.Item href="/spacing">Spacing</Dropdown.Item>
                  <Dropdown.Item href="/text">Text</Dropdown.Item>
                </DropdownButton>
              </Dropdown>
              
            </ButtonGroup>
          </Nav>
        </Container>
      </Navbar>

      <Routes location={location}>
        <Route path="/grid" element={<Grid />} />
        <Route path="/stack" element={<Stack />} />

        <Route path="/accordians" element={<Accordians />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/badges" element={<Badges />} />
        <Route path="/background" element={<Background />} />
        <Route path="/breadcrumbs" element={<Breadcrumbs />} />
        <Route path="/btn-groups" element={<BtnGroups />} />
        <Route path="/btns" element={<Btns />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/carousels" element={<Carousels />} />
        <Route path="/close-btns" element={<CloseBtns />} />
        <Route path="/dropdowns" element={<Dropdowns />} />
        <Route path="/figures" element={<Figures />} />
        <Route path="/images" element={<Images />} />
        <Route path="/list-groups" element={<ListGroups />} />
        <Route path="/modals" element={<Modals />} />
        <Route path="/navs" element={<Navs />} />
        <Route path="/offcanvases" element={<Offcanvases />} />
        <Route path="/overlays" element={<Overlays />} />
        <Route path="/paginations" element={<Paginations />} />
        <Route path="/placeholders" element={<Placeholders />} />
        <Route path="/popovers" element={<Popovers />} />
        <Route path="/progresses" element={<Progresses />} />
        <Route path="/spinners" element={<Spinners />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/tabs" element={<Tabs />} />
        <Route path="/toasts" element={<Toasts />} />
        <Route path="/tooltips" element={<Tooltips />} />

        <Route path="/ratio" element={<Ratio />} />
        <Route path="/restart-ui" element={<RestartUI />} />
        <Route path="/transitions" element={<Transitions />} />

        <Route path="/background" element={<Background />} />
        <Route path="/borders" element={<Borders />} />
        <Route path="/colors" element={<Colors />} />
        <Route path="/display" element={<Display />} />
        <Route path="/position" element={<Position />} />
        <Route path="/sizing" element={<Sizing />} />
        <Route path="/spacing" element={<Spacing />} />
        <Route path="/text" element={<Text />} />
      </Routes>
    </Container>
  );
}

export default App;