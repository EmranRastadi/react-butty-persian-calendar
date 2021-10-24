import styled from "styled-components";

const media = {
  tablet: '@media screen and (min-width:684px)',
  desktop: '@media screen and (min-width:1024px)'
}
const colors = {
  primary: '#3f51b5'
}

export const Start = styled.div`
  width: 100%;
  height: 50px;
`;

export const PopUp = styled.div`
  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.1);
  background: rgba(0 0 0 / 10%);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  visibility: hidden;
  z-index: -1;
  align-items: center;
  justify-content: center;
  transition: 0.3s all ease;
  -webkit-transition: 0.3s all ease;
  -moz-transition: 0.3s all ease;

  &.active {
    visibility: visible;
    z-index: 999999;
    transition: 0.3s all ease;
    -webkit-transition: 0.3s all ease;
    -moz-transition: 0.3s all ease;
  }
`;
export const PopUpContent = styled.div`
  width: 98vw;
  height: 300px;
  background: #fff;
  overflow: hidden;
  display: flex;
  transform: translatey(50%);
  transition: 0.3s all ease;
  -webkit-transition: 0.3s all ease;
  -moz-transition: 0.3s all ease;

  &.active {
    transform: translatey(0);
    transition: 0.3s all ease;
    -webkit-transition: 0.3s all ease;
    -moz-transition: 0.3s all ease;
  }

  ${media.tablet} {
    width: calc(100vw / 2) !important;
  }

  ${media.desktop} {
    width: calc(100vw / 3) !important;
  }
`;

export const YearSide = styled.div`
  flex: 2;
  position: relative;
  display: flex;
  overflow-y: hidden;
  min-height: 40vh;
  max-height: 300px;
  color: ${props => props.theme.options?.sidebarColor ? props.theme.options.sidebarColor : '#212121'};
  background: ${props => props.theme.options?.sidebarBG ? props.theme.options.sidebarBG : '#f7f7f7'};

  .active {
    color: ${props => props.theme.options?.activeColor ? props.theme.options.activeColor : colors['primary']};
  }
`;
export const CalendarContent = styled.div`
  flex: 8;
  background: ${props => props.theme.options?.containerBG ? props.theme.options.containerBG : '#ffffff'};
  display: flex;
  max-height: 300px;
  flex-direction: column;
`;

export const Month = styled.div`
  width: 100%;
  height: 35px;
  float: right;
  display: flex;
  background: ${props => props.theme.options?.containerBG ? props.theme.options.containerBG : '#ffffff'};
  font-size: 14px;
  align-items: center;
  justify-content: space-around;
`;
export const Today = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  color: ${props => props.theme.options?.activeColor ? props.theme.options.activeColor : colors['primary']}
`;
export const MonthSelected = styled.div`
  flex: 1;
  column-gap: 10px;
  align-items: center;
  height: 40px;
  position: relative;
  color: ${props => props.theme.options?.containerColor ? props.theme.options.containerColor : '#212121'};
  cursor: pointer;
  justify-content: center;
  display: flex;
`;

export const Week = styled.ul`
  float: right;
  list-style: none;
  display: flex;
  padding: 0px;
  margin: 5px;
  font-size: 13px;
`;
export const WeekItem = styled.li`
  flex: 1;
  display: flex;
  color: ${props => props.theme.options?.containerColor ? props.theme.options.containerColor : "#cccccc"};
  align-items: center;
  justify-content: center;
`;

export const DaysConten = styled.div`
  width: 100%;
  min-height: 180px;
  overflow-x: hidden;
  overflow-y: auto;
`;


export const DayStyle = styled("div")`
  width: 35px;
  height: 35px;
  display: flex;
  color: ${props => props.theme.options?.containerColor ? props.theme.options.containerColor : '#212121'};
  align-content: center;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: 0.3s all ease;
  -webkit-transition: 0.3s all ease;
  -moz-transition: 0.3s all ease;

  &.hidden {
    opacity: 0 !important;
    cursor: unset;
    z-index: -1;
  }

  #dayStatus {
    width: 35px;
    height: 35px;
    cursor: pointer;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;

    &.selected {
      background: #ff9800;
      border-radius: 50px;
      color: #fff;
    }

    &.today {
      color: #ff9800;
    }


    &:hover {
      background: #eee;
      border-radius: 50px;
      color: #000;
    }


  }


`;

export const WeekColumn = styled.div`
  display: flex;
  background: ${props => props.theme.options?.containerBG ? props.theme.options.containerBG : "#ffffff"};
  align-content: center;
  justify-content: space-around;
`;

export const Chevron = styled.span`
  width: 20px;
  height: 20px;
  display: flex;
  align-content: center;
  justify-content: center;
  transform: rotate(90deg);
  transition: 0.3s all ease;
  -webkit-transition: 0.3s all ease;
  -moz-transition: 0.3s all ease;

  &.active {
    transition: 0.3s all ease;
    -webkit-transition: 0.3s all ease;
    -moz-transition: 0.3s all ease;
    transform: rotate(270deg);
  }

`;

export const SelectGroup = styled.div`
  width: 180px;
  overflow: hidden !important;
  background: ${props => props.theme.options?.selectMonthBG ? props.theme.options.selectMonthBG : '#ffffff'};
  color: ${props => props.theme.options?.selectMonthColor ? props.theme.options.selectMonthColor : '#212121'};
  z-index: -1;
  grid-template: 2fr / auto auto;
  opacity: 0;
  top: 50px;
  position: absolute;
  padding: 5px 0 5px 0;
  display: grid;
  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.05);
  transition: 0.3s all ease;
  -webkit-transition: 0.3s all ease;
  -moz-transition: 0.3s all ease;
  border-radius: 5px;

  &.active {
    transition: 0.3s all ease;
    -webkit-transition: 0.3s all ease;
    -moz-transition: 0.3s all ease;
    z-index: 99;
    opacity: 1;
    top: 30px;
  }
`;

export const Preview = styled.div`
  display: flex;
  width: 100%;
  cursor: pointer;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  border: 1px solid #eee;
  border-radius: 5px;

`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.theme.options?.iconSize ? props.theme.options.iconSize.width : '20px'};
  height: ${props => props.theme.options?.iconSize ? props.theme.options.iconSize.height : '20px'};
`;
export const SelectItem = styled.div`
  text-align: center;
  padding: 2px 0 2px 0;

  &:hover {
    color: rgb(13, 71, 161);
  }
`;


export const YearGroup = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style: none;
  width: 100%;
`;
export const YearItem = styled.li`
  height: 35px;
  line-height: 2.3;
  color: #686868;

  &.active {
    font-weight: bold;
    font-size: 21px;
    line-height: 1.7;
    color: ${props => props.theme.options?.activeColor ? props.theme.options.activeColor : colors['primary']};
  }
`;

export const TopScroll = styled.div`
  width: 100%;
  height: 40px;
  top: 0px;
  left: 0px;
  z-index: 99;
  position: absolute;
  background: linear-gradient(to bottom, ${props => props.theme.options?.sidebarBG ? props.theme.options.sidebarBG : '#ffffff'}, transparent);
`;
export const BottomScroll = styled.div`
  width: 100%;
  height: 40px;
  bottom: 0px;
  left: 0px;
  z-index: 99;
  position: absolute;
  background: linear-gradient(to top, ${props => props.theme.options?.sidebarBG ? props.theme.options.sidebarBG : '#ffffff'}, transparent);
`;


export const GlassScrols = styled.div`
  width: 100%;
  height: 40px;
  position: absolute;
  top: 0px;
  bottom: 0px;
  margin: auto;
  background: #fff;
`;


export const Background = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0 0 0 / 2%);
  z-index: 99999;
  display: none;

  &.active {
    display: block;
  }
`;

export const MainFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: end;
  column-gap: 15px;
  padding-left: 15px;
`;


export const Button = styled.button`
  width: 100px;
  height: 35px;
  border: unset;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s all ease;
  -webkit-transition: 0.3s all ease;
  -moz-transition: 0.3s all ease;


  &.primary {
    background: #0d47a1 !important;
    color: #fff !important;
    transition: 0.3s all ease;
    -webkit-transition: 0.3s all ease;
    -moz-transition: 0.3s all ease;

    &:hover {
      opacity: 0.8;
      transition: 0.3s all ease;
      -webkit-transition: 0.3s all ease;
      -moz-transition: 0.3s all ease;
    }
  }

  &.warning {
    color: #212529;
    background-color: #e0a800;
    border-color: #d39e00;
    transition: 0.3s all ease;
    -webkit-transition: 0.3s all ease;
    -moz-transition: 0.3s all ease;

    &:hover {
      opacity: 0.8;
      transition: 0.3s all ease;
      -webkit-transition: 0.3s all ease;
      -moz-transition: 0.3s all ease;
    }
  }

  &.danger {
    color: #fff;
    background-color: #c82333;
    border-color: #bd2130;
    transition: 0.3s all ease;
    -webkit-transition: 0.3s all ease;
    -moz-transition: 0.3s all ease;

    &:hover {
      opacity: 0.8;
      transition: 0.3s all ease;
      -webkit-transition: 0.3s all ease;
      -moz-transition: 0.3s all ease;
    }
  }

  &.success {
    color: #fff;
    background-color: #218838;
    border-color: #1e7e34;
    transition: 0.3s all ease;
    -webkit-transition: 0.3s all ease;
    -moz-transition: 0.3s all ease;

    &:hover {
      opacity: 0.8;
      transition: 0.3s all ease;
      -webkit-transition: 0.3s all ease;
      -moz-transition: 0.3s all ease;
    }
  }

  &.default {
    color: #212121;
    background: #eee;
    transition: 0.3s all ease;
    -webkit-transition: 0.3s all ease;
    -moz-transition: 0.3s all ease;

    &:hover {
      color: #eee;
      background: #212121;
      transition: 0.3s all ease;
      -webkit-transition: 0.3s all ease;
      -moz-transition: 0.3s all ease;
    }
  }


`;