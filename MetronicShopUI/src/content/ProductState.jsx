import { createContext, useState } from "react";

export const appContent  = createContext([]);

export default function ProductState(props) {

    const [state, setState] = useState([]);

    return (<appContent.Provider value= {{state, setState}}>
            {props.children}
          </appContent.Provider>);

}