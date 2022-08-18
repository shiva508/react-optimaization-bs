import React, { Fragment, useState, useCallback, useMemo } from "react";
import Button from "../UI/Button/Button";
import DemoList from "./DemoList";

const DemoListContainer = () => {
  const [listTitle, setListTitle] = useState("My List");
  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);
  const listitems = useMemo(() => [15, 2, 8, 21, 5], []);
  return (
    <Fragment>
      <DemoList title={listTitle} items={listitems}></DemoList>
      <Button onClick={changeTitleHandler}> Toggle Title</Button>
    </Fragment>
  );
};
export default DemoListContainer;
