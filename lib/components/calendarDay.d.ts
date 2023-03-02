import React from "react";
import { ColorValue } from "react-native";
import { Event } from "../contracts/event";
interface CalendarDayProps {
    index: number;
    date: Date;
    renderEvent: (value: Event, index: number, array: Event[]) => React.ReactNode;
    events: Event[];
    textStyles: {} | [];
    borderCellColor?: ColorValue;
}
declare class CalendarDay extends React.Component<CalendarDayProps> {
    static defaultProps: {
        textStyles: {};
        borderCellColor: "#EBEBEB";
    };
    render(): any;
}
export default CalendarDay;
//# sourceMappingURL=calendarDay.d.ts.map