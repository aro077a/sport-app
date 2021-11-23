import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
import AddPlayer from './componets/addPlayers';
import FirstQuarter from './componets/firstQuarter';
import { Nav } from 'react-bootstrap';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.scss';

const store = createStore(reducer);

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='nav mt-5'>
          <Nav justify variant='tabs' className='navBar'>
            <Nav.Item>
              <Nav.Link eventKey='link-1'>
                <NavLink to='/composeTeam' className='link'>
                  Compose Team
                </NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='link-2'>
                <NavLink to='/firstQuarter' className='link'>
                  First Quarter
                </NavLink>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Route path='/composeTeam' render={() => <AddPlayer />} />
          <Route path='/firstQuarter' render={() => <FirstQuarter />} />
        </div>
      </Provider>
    </BrowserRouter>
  );
}
