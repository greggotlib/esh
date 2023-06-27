import { Navbar } from 'components/navbar';
import { Blog } from 'pages/blog';
import { Home } from 'pages/home';
import { Post } from 'pages/post';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Content, Contianer } from './App.style';
import img from 'assets/images/bank3.png';

const App = () => {
  return (
    <Contianer>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <Content img={img}>
                <Home />
              </Content>
            }
          />
          <Route
            path='/blog'
            element={
              <Content>
                <Blog />
              </Content>
            }
          />
          <Route
            path='/post/:postId'
            element={
              <Content>
                <Post />
              </Content>
            }
          />
        </Routes>
      </Router>
    </Contianer>
  );
};

export default App;
