import React from "react";
import Luncher from "./components/Luncher";
import ContextApi from "./utils/ContextApi";
import {ThemeProvider} from "styled-components";

export interface Props {
  onChange: (data: any) => void,
  defaultValue?: string | number,
  icon : JSX.Element,
  options ?: {
    iconSize?: {
      width ?: string,
      height ?: string
    },
    sidebarBG?: string,
    sidebarColor?: string,
    containerBG?: string,
    showType : 'pretty' | 'default' | string
    containerColor?: string,
    selectMonthBG ?:string,
    selectMonthColor ?:string,
    accessBtnType?: 'success' | 'primary' | 'warning' | 'danger' | 'default' | string,
    cancelBtnType?: 'success' | 'primary' | 'warning' | 'danger' | 'default' | string,
    activeColor?: string
  }
}

function Index(props: Props) {

  const theme = {
    options: props.options
  }


  return (
    <ContextApi defaultValue={props.defaultValue}>
      <ThemeProvider theme={theme}>
        <Luncher {...props}/>
      </ThemeProvider>
    </ContextApi>
  )
}

export default Index;