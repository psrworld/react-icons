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
export const IpsTruckTowIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-truck-tow ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-truck-tow" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M96 0l49.6 0c9.1 0 17.8 3.9 23.9 10.7L384 252l0-124c0-17.7 14.3-32 32-32l82.7 0c17 0 33.3 6.7 45.3 18.7L621.3 192c12 12 18.7 28.3 18.7 45.3l0 18.7 0 32 0 88c0 22.1-17.9 40-40 40l-24 0c0 53-43 96-96 96s-96-43-96-96l-128 0c0 53-43 96-96 96s-96-43-96-96l-16 0c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l144 0L96 64l0 112c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 16c0 8.8 7.2 16 16 16s16-7.2 16-16L64 32C64 14.3 78.3 0 96 0zM576 256l0-18.7L498.7 160 448 160l0 96 128 0zM208 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm272 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" })] })));
};
export default IpsTruckTowIcon;
//# sourceMappingURL=ips-truck-tow.js.map