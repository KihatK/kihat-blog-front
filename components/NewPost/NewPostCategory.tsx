import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { Select } from 'antd';

import { RootState } from '../../reducers';

const NewPostCategory = ({ category, changeCategory }) => {
  const scategoryList = useSelector((state: RootState) => state.category.scategoryList);

  return (
    <>
      <Select
        style={{ display: 'block' }}
        labelInValue
        defaultValue={category}
        onChange={changeCategory}
      >
        {scategoryList.map((c: { name: string }) => (
          <Select.Option key={c.name} value={c.name}>
            {c.name}
          </Select.Option>
        ))}
      </Select>
    </>
  );
}

export default memo(NewPostCategory);