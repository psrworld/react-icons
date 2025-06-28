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
export const IpsSeatAirlineIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-seat-airline ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-seat-airline" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32L0 143.6c0 15.2 3.1 30.2 9.1 44.1L82 357.8c15.1 35.3 49.8 58.2 88.2 58.2l45.8 0 0 48-96 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l240 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-96 0 0-48 96 0c15.1 0 29.3-7.1 38.4-19.2l43.2-57.6c7.3-9.7 8.4-22.7 3-33.5S428.1 288 416 288l-294.3 0L108 256l212 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80.5 192 67.9 162.5c-2.6-6-3.9-12.4-3.9-18.9L64 32z" })] })));
};
export default IpsSeatAirlineIcon;
//# sourceMappingURL=ips-seat-airline.js.map