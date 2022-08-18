import React, { useMemo } from "react";
import dls from "./DemoList.module.css";
const DemoList = (props) => {
  const { items } = props;
  const sortedlist = useMemo(() => {
    console.log("sorting");
    return items.sort((a, b) => a - b);
  }, [items]);

  console.log("DemoList");
  return (
    <div className={dls.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedlist.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default React.memo(DemoList);
