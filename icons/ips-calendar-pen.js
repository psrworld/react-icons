var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const IpsCalendarPenIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-calendar-pen ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-calendar-pen" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm308.8 75c-14.7-14.7-38.6-14.7-53.3 0L240.6 282l53.3 53.3 14.9-14.9c14.7-14.7 14.7-38.6 0-53.3zM146.1 376.5c-4.1 4.1-7 9.2-8.4 14.9L128.5 428c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l36.6-9.2c5.6-1.4 10.8-4.3 14.9-8.4l71.9-71.9L218 304.6l-71.9 71.9z" })] })));
};
export default IpsCalendarPenIcon;
//# sourceMappingURL=ips-calendar-pen.js.map