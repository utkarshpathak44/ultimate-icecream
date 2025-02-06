import { useRef, useState, useEffect } from "react";

//this file explains the working of the useRef hook

const RenderCount = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(1);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const prevName = useRef("");

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    //first usecase counting the number of renders of the components without using the state, which triggers another re render
  });

  useEffect(() => {//this saves the previous value of the name
    prevName.current=name
  },[name]);

  const Focus = () => {
    if (inputRef.current) {//storing the dom element inside the ref
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div>
        <input
          ref={inputRef}
          type="text"
          name=""
          id=""
          onChange={(e) => setName(e.target.value)}
        />
        <div>my name is {name}</div>
        <div>i rendered {renderCount.current} times</div>
      </div>
      <input type="button" name="" id="" onClick={Focus} value="focus" />
    </>
  );
};
export default RenderCount;
