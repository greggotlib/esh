import posts from 'api/posts.json';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Container } from './Blog.style';
import { useTranslation } from 'react-i18next';
import { dictionary } from 'utils/dictionary';

const Blog = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleGoToPost = (postId: number) => {
    navigate(`/post/${postId}`);
  };

  return (
    <Container>
      {posts.map(({ title, id, author, topic }) => (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              {author}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              {topic}
            </Typography>
            <Typography variant='body2'>{title}</Typography>
          </CardContent>
          <CardActions>
            <Button size='small' onClick={() => handleGoToPost(id)}>
              {t(dictionary.Blog.readMore)}
            </Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
};

export default Blog;
