import { useSearchParams } from "react-router-dom";
import { Button } from "antd";

export function Filters () {
  let [, setSearchParams] = useSearchParams();

  const onFilterBtnClick = (filter) => {
    setSearchParams(`filter=${filter}&page=1`);
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <Button onClick={() => onFilterBtnClick('all')}>All</Button>
      <Button onClick={() => onFilterBtnClick('active')} style={{ marginLeft: '10px' }}>Active</Button>
      <Button onClick={() => onFilterBtnClick('done')} style={{ marginLeft: '10px' }}>Blocked</Button>
    </div>
  )
}