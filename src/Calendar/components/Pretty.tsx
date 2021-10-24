import React from "react";
import moment from "jalali-moment";

function Pretty(props: any) {

  let year = moment(props.value).locale('fa').format('YYYY')
  let month = moment(props.value).locale('fa').format('MMMM')
  let day = moment(props.value).locale('fa').format('D')

  return (
    <React.Fragment>
      <span>{day}</span>
      <span>{month}</span>
      <span>{year}</span>
    </React.Fragment>
  )
}

export default Pretty