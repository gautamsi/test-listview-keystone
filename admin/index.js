import Dashboard from './pages/dashboard';
import About from './pages/about';

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
      config: {
        filter: item => !['listed', 'removed'].includes(item.status),
      },
      component: About,
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
