/*eslint-disable*/
import React, { createRef, FC, useRef } from "react";

const DisplayScreen: FC<{
  total: string | null;
  next: string | null;
  operation: string | null;
}> = (props) => {
  const { total, next, operation } = props;
  const ref = createRef<HTMLDivElement>();

  React.useLayoutEffect(() => {
    if (ref.current) {
      if (ref?.current?.clientWidth < ref?.current?.scrollWidth) {
        console.log("overflow");
      }
    }
  }, [ref]);

  return (
    <div className="displayscreen-cont" ref={ref}>
      <span className="display-screen ps-2">
        {!total && !operation && !next && "0"}
        {total?.toString()}
        {operation}
        {next?.toString()}
      </span>
    </div>
  );
};

export default DisplayScreen;
