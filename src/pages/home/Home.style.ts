import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  align-self: end;
  padding-bottom: 50px;
`;

export const Title = styled.div`
  font-size: 60px;
  color: white;
`;

export const SubTitle = styled.div`
  font-size: 40px;
  color: #fb9a9a;
`;

export const ReadMoreButton = styled.button`
  border-radius: 22px;
  padding: 12px 20px;
  background-color: white;
  border: 1px solid #f89090;
  min-width: 150px;
  align-self: center;
  color: #f89090;
  text-align: center;

  &:hover {
    background-color: #f8f1f1;
    transition: all 0.4s ease;
    -webkit-transition: all 0.4s ease;
    cursor: pointer;
  }
`;

export const SubContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
