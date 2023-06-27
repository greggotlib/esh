import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import posts from 'api/posts.json';
import { PostData } from './types';
import { dictionary } from 'utils/dictionary';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Container } from './Post.style';
import { useTranslation } from 'react-i18next';

const Post = () => {
  const { postId } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [post, setPost] = useState<PostData>();

  useEffect(() => {
    const response = posts as PostData[];
    const postData = response.find((post) => post.id === Number(postId));
    setPost(postData);
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Card>
        <CardContent>
          <Button onClick={handleGoBack}>{t(dictionary.Post.goBack)}</Button>
          <Typography variant='h5' component='h2'>
            {post.title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {post.content}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Post;
