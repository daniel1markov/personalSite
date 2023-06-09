import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  // const items: string[] = [
  //   "New York",
  //   "San Fransisco",
  //   "Tel-Aviv",
  //   "Tokyo",
  //   "London",
  //   "Paris",
  // ];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  // return (
  //   <div>
  //     <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
  //   </div>
  // );


  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      { alertVisible &&
        <Alert
        children={"HGuyal"}
        onClose={() => setAlertVisibility(false)}/>}
      <Button color="primary" children="Hello mothafucka" onClick={() => setAlertVisibility(true)}/>
    </div>
  );
}

export default App;
