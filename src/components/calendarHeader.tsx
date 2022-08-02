import React from "react";
import { ColorValue, StyleSheet, Text, View } from "react-native";

interface CalendarHeaderProps {
  weekDays: string[];
  textStyles: {};
  backgroundColorHeader?: ColorValue;
}

class CalendarHeader extends React.Component<CalendarHeaderProps> {
  static defaultProps: { textStyles: {}; backgroundColorHeader: "#F6F6F6" };

  render() {
    const { weekDays, textStyles, backgroundColorHeader } = this.props;

    return (
      <View style={[styles.header, { backgroundColor: backgroundColorHeader }]}>
        {weekDays.map((label: string, index: number) => (
          <View key={`${index}`} style={[styles.column]}>
            <Text style={[styles.text, textStyles]}>{label}</Text>
          </View>
        ))}
      </View>
    );
  }
}

CalendarHeader.defaultProps = {
  textStyles: {},
  backgroundColorHeader: "#F6F6F6",
};

const styles = StyleSheet.create({
  header: { flexDirection: "row", backgroundColor: "#F6F6F6", height: 34 },
  column: {
    width: "14.2857142857%",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
});

export default CalendarHeader;
