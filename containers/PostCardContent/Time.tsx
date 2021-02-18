import React, { memo } from 'react';
import moment from 'moment';

import { StyledSpanTime } from '../../style/containers/PostCard';

moment.locale('ko');

const Time = ({ createdAt }) => {
  return (
    <>
      <StyledSpanTime>
        {moment(createdAt).format('YYYY-MM-DD HH:mm')}
      </StyledSpanTime>
    </>
  );
}

export default memo(Time);