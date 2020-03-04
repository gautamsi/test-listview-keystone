import React from 'react';

import { Container } from '@arch-ui/layout';
import { Title } from '@arch-ui/typography';
import { ListProvider, useAdminMeta, ListData as ListPage } from '@keystonejs/app-admin-ui/components';
import { useHistory, useLocation } from 'react-router';

const listKey  = 'Post';
const About = () => {
  const location = useLocation();
  const history = useHistory();

  const routeProps = { location, history };
  const adminMeta = useAdminMeta();

  const { getListByKey, adminPath } = adminMeta;
  const list = getListByKey(listKey);
  
  return (
    <Container>
      <h1 as="h1" margin="both">
        Posts 1
      </h1>
     <ListProvider list={list} >
     <ListPage
        key={listKey}
        list={list}
        adminMeta={adminMeta}
        routeProps={routeProps}
      />
     </ListProvider>
    </Container>
  );
};

export default About;
