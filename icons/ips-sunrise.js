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
export const IpsSunriseIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-sunrise ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-sunrise" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M354.5 135.7L320 104.3 320 208c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-103.7-34.5 31.3c-13.1 11.9-33.3 10.9-45.2-2.2s-10.9-33.3 2.2-45.2l88-80c12.2-11.1 30.8-11.1 43.1 0l88 80c13.1 11.9 14 32.1 2.2 45.2s-32.1 14-45.2 2.2zm39.1 89.5c5 2.1 8.6 6.6 9.6 11.9L423 345l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L512 432l-105.3 0c-19-46.9-65-80-118.7-80s-99.7 33.1-118.7 80L64 432 34.8 389.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L153 345l19.8-107.9c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L288 289.1l90.3-62.3c4.5-3.1 10.2-3.7 15.2-1.6zM0 488c0-13.3 10.7-24 24-24l528 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 512c-13.3 0-24-10.7-24-24z" })] })));
};
export default IpsSunriseIcon;
//# sourceMappingURL=ips-sunrise.js.map