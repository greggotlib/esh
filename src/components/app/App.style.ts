import styled from 'styled-components';

export const Contianer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Content = styled.div<{ img?: string }>`
  ${({ img }) => img && `background-image: url(${img})`};
  background-size: cover;
  background-position: center;
  flex: 1;
  display: flex;
  justify-content: center; /* Center the content horizontally */
`;
