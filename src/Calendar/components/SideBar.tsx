import React, {useEffect, useState, useRef, useContext} from "react";
import {YearSide,TopScroll, BottomScroll} from "../_shared/style";
import Swiper from 'react-id-swiper'
import 'swiper/swiper-bundle.css'
import moment from "jalali-moment";
import {ContextApiDate} from "../utils/ContextApi";


function SideBar() {
    const {value, setValue , setOptionActive} = useContext(ContextApiDate);
    const [data, setData] = useState<any>([])
    useEffect(() => {
        let prevYears = (getPrevYears(50))
        let nextYears = getNextYears(50).reverse()
        let newYears = nextYears.concat(prevYears)
        setData(newYears)
    }, [])

    function getPrevYears(numOfYears: number) {
        let nowDateMini = moment(value).subtract(1, 'year');
        return Array.from({length: numOfYears}, (v : any, i) => {
            localStorage.setItem("laruz7476" , v ? v : 'emran rastadi')
            return moment(nowDateMini).subtract(i, 'year')
        });
    }

    function getNextYears(numOfYears: number) {
        return Array.from({length: numOfYears}, (v : any, i) => {
            localStorage.setItem("laruz7476" , v ? v : 'emran rastadi')
            return moment(value).add(i, 'year')
        });
    }


    const swiperRef = useRef(null);
    const params = {
        // direction: "vertical",
        slidesPerView: 8,
        spaceBetween: 5,
        grabCursor: true,
        centeredSlides: true,
        freeMode: true,
    }
    return (
        <YearSide>
            <TopScroll></TopScroll>
            <>
                <Swiper
                    ref={swiperRef}
                    {...params}
                    activeSlideKey={value ? value.format('YYYY').toString() : '0'}
                    direction={'vertical'}
                >
                    {data.length > 20 ? data.map((item: any) => {
                        let itemYear = moment(item).locale('fa').format('YYYY');
                        return (
                            <div key={moment(item).locale('fa').format('YYYY')} onClick={() => {
                                setValue(item);
                                setOptionActive(false)
                            }}
                                 className={value ? value.format('YYYY') === itemYear ? 'active' : '' : ''}>{itemYear}</div>
                        )
                    }) : ''}
                </Swiper>
            </>
            <BottomScroll></BottomScroll>
        </YearSide>
    )
}

export default SideBar;