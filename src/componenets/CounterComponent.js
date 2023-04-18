import { useSelector } from "react-redux";

const CounterComponent = () => {
    const counter = useSelector(state => state)
  return <div>CounterComponent {counter}</div>;
};

export default CounterComponent;
