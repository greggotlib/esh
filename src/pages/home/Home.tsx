import { dictionary } from 'utils/dictionary';
import {
  Container,
  ReadMoreButton,
  SubContentWrapper,
  SubTitle,
} from './Home.style';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/blog');
  };

  return (
    <Container>
      <SubContentWrapper>
        <SubTitle>{t(dictionary.Home.newBackIsComing)}</SubTitle>
        <ReadMoreButton onClick={handleNavigation}>
          {t(dictionary.Home.readLatestUpdates)}
        </ReadMoreButton>
      </SubContentWrapper>
    </Container>
  );
};

export default Home;
