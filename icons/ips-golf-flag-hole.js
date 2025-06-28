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
export const IpsGolfFlagHoleIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-golf-flag-hole ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-golf-flag-hole" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M162.7 2.5c-7.4-3.7-16.3-3.3-23.4 1.1S128 15.7 128 24l0 208c0 1.3 .1 2.7 .3 4c-.2 1.3-.3 2.6-.3 4l0 92.8C51.5 349.4 0 380.5 0 416c0 53 114.6 96 256 96s256-43 256-96s-114.6-96-256-96c-27.9 0-54.8 1.7-80 4.8l0-77.9 194.7-97.4c8.1-4.1 13.3-12.4 13.3-21.5s-5.1-17.4-13.3-21.5l-208-104zM288 416c0 17.7-28.7 32-64 32s-64-14.3-64-32s28.7-32 64-32s64 14.3 64 32z" })] })));
};
export default IpsGolfFlagHoleIcon;
//# sourceMappingURL=ips-golf-flag-hole.js.map