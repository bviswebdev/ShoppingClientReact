import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { selectCount } from "../redux/testSlice";
import { initiateIncrement } from "../redux/testSlice";

function TestComponent() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const countPlusTwo = useSelector((state) => state.test.value + 2);
  console.log("iam from test component");
  return (
    <div className="App">
      <Button variant="contained" onClick={() => dispatch(initiateIncrement())}>
        Hello World
      </Button>
      <br />
      <p>Count Value from store - {count}</p>
      <p>Count Value from compoenent - {countPlusTwo}</p>
    </div>
  );
}

export default TestComponent;
