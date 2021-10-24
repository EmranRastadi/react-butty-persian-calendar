import React, {useContext, useEffect, useState} from "react";
import moment from 'jalali-moment'
import SideBar from "./SideBar";
import {dayStyle} from "./ComponentStyle";
import {
  PopUp,
  WeekColumn,
  PopUpContent,
  CalendarContent,
  DayStyle,
  Week,
  WeekItem,
  Preview,
  Icon,
  DaysConten, MainFooter, Button
} from "../_shared/style";
import {ThemeProvider} from "styled-components";
import 'swiper/swiper-bundle.css'
import {buildCalender} from "./BuildCalendar";
import Header from "./Header";
import {ContextApiDate} from "../utils/ContextApi";
import {Props} from "../index";
import Pretty from "./Pretty";
import Default from "./Default";

function Luncher(props: Props) {
  const {value, setValue, setOptionActive , defaultValue} = useContext(ContextApiDate);
  const [show , setShow] = useState<boolean>(false)
  const [calendar, setCalendar] = useState<any>([])
  const [confirmVal, setConfirmVal] = useState<any>('')
  const theme = {
    start: {
      height: 50
    }
  }

  useEffect(() => {
    setCalendar(buildCalender(value));
  }, [value])


  function getEventChange(day: any): void {
    setValue(day)
    setOptionActive(false)
    let date = {
      year: moment(day).locale('fa').format('YYYY'),
      month: moment(day).locale('fa').format('MMMM'),
      monthNum: moment(day).locale('fa').format('M'),
      day: moment(day).locale('fa').format('D')
    }
    setConfirmVal({date, timestamp: Date.parse(day)});
  }

  const [confirms , setConfirms] = useState<any>(defaultValue);


  function confirm(e: React.MouseEvent) {
    e.preventDefault();
    props.onChange(confirmVal)
    setConfirms(value)
    setShow(false)
  }

  return (
    <ThemeProvider theme={theme}>


      <Preview onClick={() => setShow(true)}>
        <Icon>
          {props.icon}
        </Icon>

        {props.options?.showType ? props.options?.showType === "pretty" ? (
          <Pretty value={confirms}/>
        ) : (
          <Default value={confirms}/>
        ) : (<Default value={confirms}/>)}

      </Preview>


      <PopUp className={show ? "active" : ""}>
        <PopUpContent className={show ? "active" : ''}>
          <SideBar/>
          <CalendarContent>

            <Header/>

            <Week>
              <WeekItem>ش</WeekItem>
              <WeekItem>ی</WeekItem>
              <WeekItem>د</WeekItem>
              <WeekItem>س</WeekItem>
              <WeekItem>چ</WeekItem>
              <WeekItem>پ</WeekItem>
              <WeekItem>ج</WeekItem>
            </Week>

            <DaysConten>


              {calendar.map((weeks: any, index: number) => (
                <WeekColumn key={index}>
                  {weeks.map((day: any, indexs: number) => {
                    return (
                      <DayStyle
                        className={dayStyle(day, value) === "hidden" ? "hidden" : "now"}
                        key={indexs}
                        onClick={() => getEventChange(day.locale('fa'))}
                      >
                        <div className={dayStyle(day, value)} id={"dayStatus"}>
                          {day.format("D").toString()}
                        </div>
                      </DayStyle>
                    )

                  })}
                </WeekColumn>
              ))}


            </DaysConten>

            <MainFooter>
              <Button onClick={() => setShow(false)}
                      className={props.options?.cancelBtnType ? props.options?.cancelBtnType : "default"}>بازگشت</Button>
              <Button onClick={e => confirm(e)}
                      className={props.options?.accessBtnType ? props.options?.accessBtnType : "primary"}>تایید</Button>
            </MainFooter>

          </CalendarContent>
        </PopUpContent>
      </PopUp>
    </ThemeProvider>
  )
}

export default Luncher;