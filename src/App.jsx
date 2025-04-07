/**
 * React Context API
 * - useContext : to consume context
 * how to use useContext?
 * 1. create context using createContext
 *   import { createContext } from "react";
 *   export const CountContext = createContext();
 * 2. create a provider using Provider.  * 3. wrap the provider around the component tree
 *  import { CountContext } from "./context";
 *  const CountProvider = ({ children }) => {
 *    const [count, setCount] = useState(0);
 *   return (
 *    <CountContext.Provider value={{ count, setCount }}>
 *      {children}
 *   </CountContext.Provider>
 *   )
 *  }
 *
 * 4. use the context in the component using useContext
 *   import { useContext } from "react";
 *  import { CountContext } from "./context";
 *  const { count, setCount } = useContext(CountContext);
 *
 * 5. update the context using useState or useReducer
 * 6. use the context in the component using useContext
 *
 *
 * recoil
 * run npm install recoil
 * recoilroot, atom , selectors,useRecoilState, useRecoilValue, useSetRecoilState
 *
 * https://www.notion.so/saaahil/Week-7-2-1b2e16b01ca58197804ae62c894a49be
 */
import { useContext, useMemo, useState } from "react";
import { CountContext } from "./context";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  console.log("re-render");
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);

  return (
    <div>
      <b>{count}</b>
      <EvenCountRenderer />
    </div>
  );
}

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);

  return <div>{isEven ? "It is even" : null}</div>;
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("buttons re-rendererd");

  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
