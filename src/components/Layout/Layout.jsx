import { Outlet } from 'react-router-dom';
import { Header, LinkLogo, Div, Links, } from './Layout.styled.jsx';
import avtolog from '../img/avtolog.jpg';

function Layout() {
  return (
    <div>
      <Header>
        <LinkLogo to="/">
          <img src={avtolog} alt="Car logo" width={100} />
          Welcome to the auto shop
        </LinkLogo>
        <Links>
          <Div to="/catalog">Catalog</Div>
          <Div to="/favorites">Favorites</Div>
        </Links>
      </Header>
      
        <Outlet />
     
    </div>
  );
}

export default Layout;
