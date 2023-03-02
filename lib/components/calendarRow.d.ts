import React from 'react';
import { ColorValue } from 'react-native';
interface CalendarRowProps {
    children: React.ReactNode;
    borderColor: ColorValue;
}
declare class CalendarRow extends React.Component<CalendarRowProps> {
    static defaultProps: {
        borderColor: string;
    };
    render(): any;
}
export default CalendarRow;
//# sourceMappingURL=calendarRow.d.ts.map