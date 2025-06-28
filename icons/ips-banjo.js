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
export const IpsBanjoIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-banjo ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-banjo" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M465 7c-9.4-9.4-24.6-9.4-33.9 0L383 55c-2.4 2.4-4.3 5.3-5.5 8.5l-15.4 41L286 180.7c-20.6-13.9-44.3-23.4-70-27l0-1.7c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 1.7c-28.5 4.1-54.6 15.3-76.6 31.7l-1.2-1.2c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l1.2 1.2C41 241.4 29.8 267.5 25.7 296L24 296c-13.3 0-24 10.7-24 24s10.7 24 24 24l1.7 0c4.1 28.5 15.3 54.6 31.7 76.6l-1.2 1.2c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l1.2-1.2c22 16.5 48.2 27.7 76.6 31.7l0 1.7c0 13.3 10.7 24 24 24s24-10.7 24-24l0-1.7c28.5-4.1 54.6-15.3 76.6-31.7l1.2 1.2c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-1.2-1.2c16.5-22 27.7-48.2 31.7-76.6l1.7 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-1.7 0c-3.7-25.7-13.1-49.5-27-70l76.1-76.1 41-15.4c3.2-1.2 6.1-3.1 8.5-5.5l48-48c9.4-9.4 9.4-24.6 0-33.9L465 7zM192 208a112 112 0 1 1 0 224 112 112 0 1 1 0-224zM155.3 308.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48z" })] })));
};
export default IpsBanjoIcon;
//# sourceMappingURL=ips-banjo.js.map