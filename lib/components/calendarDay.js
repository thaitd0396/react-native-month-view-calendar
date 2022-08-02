"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var CalendarDay = /** @class */ (function (_super) {
    __extends(CalendarDay, _super);
    function CalendarDay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalendarDay.prototype.render = function () {
        var _a = this.props, index = _a.index, date = _a.date, renderEvent = _a.renderEvent, events = _a.events, textStyles = _a.textStyles, borderCellColor = _a.borderCellColor;
        var cellStyles = [styles.cell];
        if (index === 0) {
            cellStyles.push(styles.leftBorder);
        }
        return (react_1.default.createElement(react_native_1.View, { style: __spreadArray(__spreadArray([], cellStyles, true), [{ borderColor: borderCellColor }], false) },
            react_1.default.createElement(react_native_1.Text, { style: [styles.text, textStyles] }, date.getDate()),
            react_1.default.createElement(react_native_1.View, { style: styles.wrapEvents }, events.map(renderEvent))));
    };
    return CalendarDay;
}(react_1.default.Component));
CalendarDay.defaultProps = {
    textStyles: {},
    borderCellColor: "#EBEBEB",
};
var styles = react_native_1.StyleSheet.create({
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
exports.default = CalendarDay;
//# sourceMappingURL=calendarDay.js.map