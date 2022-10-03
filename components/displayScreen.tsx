/*eslint-disable*/
import React, { FC } from 'react';

const DisplayScreen: FC<{ total: string | null, next:  string | null, operation:  string | null}>  = (props) => {
  const { total, next, operation } = props;
  return (
    <div className="displayscreen-cont">
      <span className="display-screen">
        {(!total && !operation && !next) && '0'}
        {total?.toString()}
        {operation}
        {next?.toString()}
      </span>
    </div>
  );
}

export default DisplayScreen;
