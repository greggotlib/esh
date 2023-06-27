import { Link, useLocation } from 'react-router-dom';
import { Nav, Ul, ListItem, Header } from './Navbar.style';
import { useTranslation } from 'react-i18next';
import { LocaleSelector } from 'components/localeSelector';

const Navbar = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  return (
    <Header>
      <Nav>
        <Ul>
          <ListItem isSelected={pathname === '/'}>
            <Link to='/'>{t('home')}</Link>
          </ListItem>
          <ListItem isSelected={pathname === '/blog'}>
            <Link to='/blog'>{t('blog')}</Link>
          </ListItem>
        </Ul>
      </Nav>
      <LocaleSelector />
    </Header>
  );
};

export default Navbar;
