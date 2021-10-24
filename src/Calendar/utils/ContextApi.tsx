import React, {createContext, useState} from "react";
import moment from "jalali-moment";

export const ContextApiDate = createContext<any>('');

interface Props {
  children: any,
  defaultValue?: string | number
}

function ContextApi(props: Props) {
  const [value, setValue] = useState<any>(props.defaultValue ? moment(props.defaultValue).locale('fa') : moment().locale('fa'));
  const [optionActive, setOptionActive] = useState<any>(false)

  let defaultValue = props.defaultValue;
  return (
    <ContextApiDate.Provider value={{
      value,
      setValue,
      optionActive,
      defaultValue,
      setOptionActive
    }}>
      {props.children}
    </ContextApiDate.Provider>
  )
}

export default ContextApi;