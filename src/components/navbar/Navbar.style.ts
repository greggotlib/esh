import styled from 'styled-components';

export const Nav = styled.nav`
  margin-inline-start: 60px;
`;

export const Ul = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li<{ isSelected: boolean }>`
  list-style: none;
  margin: 26px 10px;
  a {
    text-decoration: none;
    color: ${({ isSelected = false }) => (isSelected ? 'black' : '#a4a4a4')};
  }
`;

export const Header = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  width: 100%;
  left: 0;
`;
