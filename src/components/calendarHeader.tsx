import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface CalendarHeaderProps {
    weekDays: string[]
    textStyles: {}
}

class CalendarHeader extends React.Component<CalendarHeaderProps> {
    static defaultProps: { textStyles: {} }

    render() {
        const { weekDays, textStyles } = this.props

        return (
            <View style={styles.header}>
                {weekDays.map((label: string, index: number) => (
                    <View key={`${index}`} style={[styles.column]}>
                        <Text style={[styles.text, textStyles]}>{label}</Text>
                    </View>
                ))}
            </View>
        )
    }
}

CalendarHeader.defaultProps = {
    textStyles: {},
}

const styles = StyleSheet.create({
    header: { flexDirection: 'row', backgroundColor: '#F6F6F6', height: 34 },
    column: {
        width: '14.2857142857%',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
    },
})

export default CalendarHeader
