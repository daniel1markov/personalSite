import { useState } from "react";

function ListGroup() {
  let items: string[] = [
    "New York",
    "San Fransisco",
    "Tel-Aviv",
    "Tokyo",
    "London",
    "Paris",
  ];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  
  return (
    <>
      <h1>List</h1>
      {!items.length && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
        <li

            className={ 
              selectedIndex === index
              ? "list-group-item active"
              : "list-group-item"
            }
            key={index}
            onClick= { () => setSelectedIndex(index)}
          >
            {item}
        </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
