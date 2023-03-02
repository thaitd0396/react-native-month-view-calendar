import React from "react";
import { ColorValue } from "react-native";
interface CalendarHeaderProps {
    weekDays: string[];
    textStyles: {};
    backgroundColorHeader?: ColorValue;
}
declare class CalendarHeader extends React.Component<CalendarHeaderProps> {
    static defaultProps: {
        textStyles: {};
        backgroundColorHeader: "#F6F6F6";
    };
    render(): any;
}
export default CalendarHeader;
//# sourceMappingURL=calendarHeader.d.ts.map