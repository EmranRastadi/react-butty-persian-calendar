# Getting start with TSDX and Typescript

This package is published on npm and can be accessed and installed. [react-butty-persian-calendar](https://www.npmjs.com/package/@laruz7476/react-butty-persian-calendar).

## How do I used id ?

You must first install the package from the npm repository.

`npm i @laruz7476/react-butty-persian-calendar`

## Calendar base options

Option | Usage | Default Value | Required | Sample | args
--- | --- | --- | --- | --- | ---
onChange | get data from calendar | now date timestamp | true | `onChange={yourFunc(date){console.log(date)}` | null
defaultValue | set your default date | now date timestamp | false | `defaultValue={now Date()}` | string date or timestamp
icon | jsx calendar icon element | null | true | `icon={<AiFillCalendar />}` | jsx icon

## Calendar custom options

Option | Usage | Default Value
--- | --- | ---
iconSize | change calendar icon size | `{width:'20px',height:'20px'}`
sidebarBG | sidebar background color | `#f7f7f7`
sidebarColor | sidebar text color | `#212121`
containerBG | container background color | `#ffffff`
containerColor | container text color | `#212121`
selectMonthBG | background month selector | `#ffffff`
selectMonthColor | text color month selector | `#212121`
accessBtnType | change submit btn style | `success` `primary` `warning` `danger` `default`
cancelBtnType | change cancel btn style | `success` `primary` `warning` `danger` `default`
showType | input box show type | `pretty` `default`
activeColor | the color of the day selected | `#3f51b5`

## Example code

```js
...
import {ButtyCalendar} from "@laruz7476/react-butty-persian-calendar";

function App(){
  function onChangeCalendar(date){
    console.log(date)
  }
  return (
    <ButtyCalendar onChange={onChangeCalendar} icon={<AiFillCalendar />} />
  )
}

export default App;
```

## Result by default value

[react butty persian calendar example](https://codesandbox.io/s/react-butty-persian-calendar-l7mwu)
