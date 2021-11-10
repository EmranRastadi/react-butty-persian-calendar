/// <reference types="react" />
export interface Props {
    onChange: (data: any) => void;
    defaultValue?: string | number;
    icon: JSX.Element;
    options?: {
        iconSize?: {
            width?: string;
            height?: string;
        };
        sidebarBG?: string;
        sidebarColor?: string;
        containerBG?: string;
        showType: 'pretty' | 'default' | string;
        containerColor?: string;
        selectMonthBG?: string;
        selectMonthColor?: string;
        accessBtnType?: 'success' | 'primary' | 'warning' | 'danger' | 'default' | string;
        cancelBtnType?: 'success' | 'primary' | 'warning' | 'danger' | 'default' | string;
        activeColor?: string;
    };
}
declare function Index(props: Props): JSX.Element;
export default Index;
