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
export const IpsSandwichIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-sandwich ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-sandwich" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 96C0 78.3 14.3 64 32 64l448 0c17.7 0 32 14.3 32 32l0 48c0 17.7-14.3 32-32 32L32 176c-17.7 0-32-14.3-32-32L0 96zM303.9 382.6c10 5.8 22.3 5.8 32.2 0l70.2-40.9c6.4-3.7 13.6-5.7 20.9-5.7l4.8 0 48 0c17.7 0 32 14.3 32 32l0 48c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32l0-48c0-17.7 14.3-32 32-32l176 0 4.8 0c7.4 0 14.6 2 20.9 5.7l70.2 40.9zM32 304c-17.7 0-32-14.3-32-32s14.3-32 32-32c7.2 0 15.8-3.7 35.4-13c16.6-7.8 40.6-19 68.6-19c30.6 0 53 10.2 70.1 18l1.9 .9c17.2 7.8 29.7 13.1 48.1 13.1s30.9-5.3 48.1-13.1l1.9-.9c17-7.8 39.4-18 70.1-18c28 0 52.1 11.3 68.6 19c19.6 9.2 28.2 13 35.4 13c17.7 0 32 14.3 32 32s-14.3 32-32 32c-22.7 0-44.3-10.3-58.8-17.2c0 0 0 0 0 0c-1.3-.6-2.6-1.2-3.8-1.8c-17.4-8.2-29.4-13-41.4-13c-16.2 0-27.5 5-45.4 13.1c0 0 0 0-.1 0c-18 8.2-41.4 18.9-74.5 18.9s-56.6-10.7-74.5-18.9c0 0 0 0-.1 0C163.5 277 152.2 272 136 272c-12 0-23.9 4.7-41.4 13c-1.2 .6-2.5 1.2-3.8 1.8C76.3 293.7 54.7 304 32 304z" })] })));
};
export default IpsSandwichIcon;
//# sourceMappingURL=ips-sandwich.js.map