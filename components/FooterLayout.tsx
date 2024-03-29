import React, { memo } from 'react';

import { StyledDiv } from '../style/components/AppLayout';

const FooterLayout = () => {
  return (
    <>
      <footer>
        <StyledDiv>
          <br />
          Made by Kihat
          <br />
          &nbsp;
        </StyledDiv>
      </footer>
    </>
  );
}

export default memo(FooterLayout);