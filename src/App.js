import { useState } from "react";
import "./App.css";
function App() {
  let classes = ["hello", "first", "happy", "comment"];
  let selectedClass = "";
  // let classNumber = 0;
  let theClass;

  let [myClass, setMyClass] = useState("hello");
  let [message, setMessage] = useState("hello, it's me...");
  let [classNumber, setClassNumber] = useState(0);

  const clickHandler = () => {
    theClass = classes[classNumber];
    switch (theClass) {
      case "hello":
        selectedClass = "hello";
        message = "hello, it's me...";
        break;
      case "first":
        selectedClass = "first";
        message = "First Masoma's React app 🚀🙂";
        break;
      case "happy":
        selectedClass = "happy";
        message = "happy to be visited by you 🤩";
        break;
      case "comment":
        selectedClass = "comment";
        message =
          "Please like and leave me a motivated comment to see more amazing projects by Masooma 🙃😉";
        setClassNumber(0);
        break;
      default:
        selectedClass = "hello";
        message = "hello";
    }

    setMyClass(selectedClass);
    setMessage(message);
    classNumber++;
    setClassNumber(classNumber);
    if (classNumber === 4) {
      setClassNumber(0);
    }
  };

  return (
    <>
      <div className="container">
        <p className={`${myClass}`}>{message}</p>
        <div className="fixed">
          <button onClick={clickHandler}>touch me🙃</button>
        </div>
      </div>
    </>
  );
}
export default App;
