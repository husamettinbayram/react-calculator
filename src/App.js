import "./styles/style.css"
import { useReducer } from "react"

import { CalcButton } from "./CalcButton";


export const ACTION_TYPES = {
  ADD_DIGIT: "add_digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate"
}

// funciton reducer (state,{type,payload})
//şeklinde de alabilirsin ama sanki aşağıdaki CalcButton'daki type ile vs karışır diye almadım


function App() {
  const [{ outputUpper, outputLower, operand }, dispatch] = useReducer(reducer, { outputUpper: "", outputLower: "", operand: "" })

  function reducer(state, action) {
    switch (action.type) {
      case ACTION_TYPES.ADD_DIGIT:
        if (state.outputLower === "0" && action.payload === "0") return state
        if (state.outputLower.includes(".") && action.payload === ".") return state
        // console.log(state.outputLower)

        if (state.outputUpper !== "" && state.operand === "") return {outputUpper:"", operand: "", outputLower:action.payload}
        return { ...state, outputLower: `${state.outputLower}${action.payload}` }

      case ACTION_TYPES.CHOOSE_OPERATION:
        if (state.outputLower === "" && state.outputUpper === "") return state
        if (state.outputLower === "") return { ...state, operand: action.payload }
        if (state.outputUpper === "") return { outputLower: "", outputUpper: state.outputLower, operand: action.payload }
        if (state.outputLower !== "" && state.outputUpper !== "" && state.operand !== "") return {operand:action.payload, outputLower:"", outputUpper:eval(`${state.outputUpper} ${state.operand} ${state.outputLower}`)}

      case ACTION_TYPES.CLEAR:
        return { outputLower: "", outputUpper: "", operand: "" }

      case ACTION_TYPES.DELETE_DIGIT:
        if(state.outputLower !== "")
        return { ...state, outputLower: state.outputLower.slice(0, state.outputLower.length - 1) }

        case ACTION_TYPES.EVALUATE:
          // if (state.operand === "+")
            // return {operand:"",outputLower:"", outputUpper: Number(state.outputLower) state.operand) Number(state.outputUpper)}

            if (state.outputLower === "" || state.outputUpper === "" || state.operand === "") return state
            if (state.operand === "") return state
            return {operand:"", outputLower:"", outputUpper:eval(`${state.outputUpper} ${state.operand} ${state.outputLower}`)}
          

      default: return state

    }
  }

  return (

    <div className="calculator-grid">
      <div className="output">
        <div className="outputUpper">{outputUpper}</div>
        <div className="operand">{operand}</div>
        <div className="outputLower">{outputLower}</div>
      </div>

      <CalcButton className="span-two" Value="AC" dispatch={dispatch} type="CLEAR" />
      <CalcButton Value="DEL" dispatch={dispatch} type="DEL" />
      <CalcButton Value="/" dispatch={dispatch} type="OP" />
      <CalcButton Value="1" dispatch={dispatch} type="ADD" />
      <CalcButton Value="2" dispatch={dispatch} type="ADD" />
      <CalcButton Value="3" dispatch={dispatch} type="ADD" />
      <CalcButton Value="*" dispatch={dispatch} type="OP" />
      <CalcButton Value="4" dispatch={dispatch} type="ADD" />
      <CalcButton Value="5" dispatch={dispatch} type="ADD" />
      <CalcButton Value="6" dispatch={dispatch} type="ADD" />
      <CalcButton Value="+" dispatch={dispatch} type="OP" />
      <CalcButton Value="7" dispatch={dispatch} type="ADD" />
      <CalcButton Value="8" dispatch={dispatch} type="ADD" />
      <CalcButton Value="9" dispatch={dispatch} type="ADD" />
      <CalcButton Value="-" dispatch={dispatch} type="OP" />
      <CalcButton Value="." dispatch={dispatch} type="ADD" />
      <CalcButton Value="0" dispatch={dispatch} type="ADD" />
      <CalcButton className="span-two" Value="=" dispatch={dispatch} type="EVAL" />
    </div>
  );
}

export default App;