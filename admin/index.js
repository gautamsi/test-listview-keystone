import Dashboard from './pages/dashboard';
import About from './pages/about';
import Posts1 from './pages/posts1';
import Posts2 from './pages/posts2';

export default {
  pages: () => [
    {
      label: 'A new dashboard',
      path: '',
      component: Dashboard,
    },
    {
      label: 'About this project',
      path: 'about',
      component: About,
    },
    {
      label: 'Posts 1',
      path: 'posts1',
      addToNav: true,
      component: Posts1,
    },
    {
      label: 'Posts 2',
      path: 'posts2',
      component: Posts2,
    },
    {
      label: 'Blog',
      children: [
        { listKey: 'Post' },
        { label: 'Categories', listKey: 'PostCategory' },
        { listKey: 'Comment' },
      ],
    },
    {
      label: 'People',
      children: ['User'],
    },
  ],
};
