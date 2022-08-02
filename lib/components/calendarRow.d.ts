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
    render(): JSX.Element;
}
export default CalendarRow;
//# sourceMappingURL=calendarRow.d.ts.map