import React, {useContext, useState} from "react";
import {Month, MonthSelected, Today, Chevron, SelectGroup, SelectItem} from "../_shared/style";
import moment from "jalali-moment";
import {ContextApiDate} from "../utils/ContextApi";

function Header() {
    const {value, setValue, optionActive,setOptionActive} = useContext(ContextApiDate);
    const [months, setMonths] = useState<any>([]);


    function getHeadDate() {
        return moment(value).locale('fa').format('MMMM') + " " + moment(value).locale('fa').format('YYYY');
    }


    function handleGetMonthList() {
        let monthListArr = [];
        let startOfMonth = value.clone().startOf('year');
        for (let i=1 ; i <= 12 ; i++){
            let newMonth = moment(startOfMonth).add(i, 'month').clone()
            monthListArr.push(newMonth)
        }
        setMonths(monthListArr)
    }

    return (
        <Month>
            <MonthSelected id={"main-click"}>
                <span onClick={() => {
                    handleGetMonthList();
                    setOptionActive(!optionActive)
                }}>{getHeadDate()}</span> <Chevron
                className={optionActive ? "active" : ""}>{String.fromCharCode(60)}</Chevron>
                <SelectGroup id={"optional-group"} className={optionActive ? "active" : ""}>
                        {months.length ? months.map((item: any, index: number) => {
                            return (
                                <SelectItem onClick={() => {
                                    setValue(item)
                                    setOptionActive(false)
                                }} key={index}>
                                    {item.format('MMMM')}
                                </SelectItem>
                            )
                        }) : ''}
                </SelectGroup>
            </MonthSelected>
            <Today onClick={() => {
                setValue(moment(new Date()).locale('fa'))
            }}>امروز</Today>
        </Month>
    )
}

export default Header