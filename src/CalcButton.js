import React from 'react'
import { ACTION_TYPES } from './App'

export function CalcButton({Value, dispatch, type,className}) {
 if (type ==="ADD")
    return (<button className={className} onClick={()=>dispatch({type:ACTION_TYPES.ADD_DIGIT,payload:Value})}>{Value}</button>)
  if(type === "OP")
    return (<button className={className} onClick={()=>dispatch({type:ACTION_TYPES.CHOOSE_OPERATION,payload:Value})}>{Value}</button>)
  if(type==="CLEAR")
    return (<button className={className} onClick={()=>dispatch({type:ACTION_TYPES.CLEAR})}>{Value}</button>)
  if(type==="DEL")
    return (<button className={className} onClick={()=>dispatch({type:ACTION_TYPES.DELETE_DIGIT})}>{Value}</button>)
  if(type === "EVAL")
    return (<button className={className} onClick={()=>dispatch({type:ACTION_TYPES.EVALUATE})}>{Value}</button>)
  
}