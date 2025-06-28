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
export const IpsCalendarStarIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-calendar-star ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-calendar-star" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm233.3 58.9c-3.8-7.7-14.8-7.7-18.7 0l-23.6 47.8-52.7 7.7c-8.5 1.2-11.9 11.7-5.8 17.7l38.2 37.2-9 52.5c-1.5 8.5 7.5 15 15.1 11L224 400l47.2 24.8c7.6 4 16.5-2.5 15.1-11l-9-52.5 38.2-37.2c6.2-6 2.8-16.5-5.8-17.7l-52.7-7.7-23.6-47.8z" })] })));
};
export default IpsCalendarStarIcon;
//# sourceMappingURL=ips-calendar-star.js.map