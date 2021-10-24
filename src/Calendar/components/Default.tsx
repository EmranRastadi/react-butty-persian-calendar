import React from "react";
import moment from "jalali-moment";

function Default(props: any) {
  let year = moment(props.value).locale('fa').format('YYYY')
  let month = moment(props.value).locale('fa').format('M')
  let day = moment(props.value).locale('fa').format('D')
  return (
    <React.Fragment>
      <span>{day}</span>
      <span>/</span>
      <span>{month}</span>
      <span>/</span>
      <span>{year}</span>
    </React.Fragment>
  )
}

export default Default