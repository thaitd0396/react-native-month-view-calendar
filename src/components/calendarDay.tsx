import React from "react";
import { Text, View, StyleSheet, ColorValue } from "react-native";
import { Event } from "../contracts/event";

interface CalendarDayProps {
  index: number;
  date: Date;
  renderEvent: (value: Event, index: number, array: Event[]) => React.ReactNode;
  events: Event[];
  textStyles: {} | [];
  borderCellColor?: ColorValue;
}

class CalendarDay extends React.Component<CalendarDayProps> {
  static defaultProps: { textStyles: {}; borderCellColor: "#EBEBEB" };

  render() {
    const { index, date, renderEvent, events, textStyles, borderCellColor } =
      this.props;
    const cellStyles: any[] = [styles.cell];
    if (index === 0) {
      cellStyles.push(styles.leftBorder);
    }

    return (
      <View style={[...cellStyles, { borderColor: borderCellColor }]}>
        <Text style={[styles.text, textStyles]}>{date.getDate()}</Text>
        <View style={styles.wrapEvents}>{events.map(renderEvent)}</View>
      </View>
    );
  }
}

CalendarDay.defaultProps = {
  textStyles: {},
  borderCellColor: "#EBEBEB",
};

const styles = StyleSheet.create({
  wrapEvents: {
    flexDirection: "row",
    paddingHorizontal: 5,
    marginTop: 9,
    flexWrap: "wrap",
    justifyContent: "center",
    // Only show max 4 lines of dots
    height: 36,
    overflow: "hidden",
  },
  cell: {
    width: "14.2857142857%",
    borderColor: "#EBEBEB",
    borderRightWidth: 1,
    minHeight: 65,
    paddingHorizontal: 1.5,
    // In case of height screen too short, can be not enough for 4 lines
    overflow: "hidden",
  },
  leftBorder: {
    borderLeftWidth: 1,
  },
  text: {
    textAlign: "center",
  },
});

export default CalendarDay;
