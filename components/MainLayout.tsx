import React, { memo } from 'react';
import { Col } from 'antd';

import { StyledRow, MainContentCol } from '../style/components/AppLayout';

const MainLayout = ({ children }) => {
  return (
    <>
      <main>
        <StyledRow>
          <Col xs={24} md={2}></Col>
          <MainContentCol xs={24} md={20}>
            {children}
          </MainContentCol>
          <Col xs={24} md={2}></Col>
        </StyledRow>
      </main>
    </>
  );
}

export default memo(MainLayout);