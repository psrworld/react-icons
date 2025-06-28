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
export const IpsBadgeSheriffIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-badge-sheriff ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-badge-sheriff" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M272 48c0 14.8-6.7 28-17.2 36.8l25 42.8c5.7 9.8 16.2 15.8 27.5 15.9l47.6 .2c6.7-18.5 24.4-31.7 45.2-31.7c26.5 0 48 21.5 48 48s-21.5 48-48 48c-5.9 0-11.6-1.1-16.9-3.1L363 240.1c-5.6 9.8-5.6 21.9 0 31.8l20.1 35.2c5.3-2 10.9-3.1 16.9-3.1c26.5 0 48 21.5 48 48s-21.5 48-48 48c-20.8 0-38.5-13.2-45.2-31.7l-47.6 .2c-11.3 0-21.8 6.1-27.5 15.9l-25 42.8c10.5 8.8 17.2 22 17.2 36.8c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-14.8 6.7-28 17.2-36.8l-25-42.8c-5.7-9.8-16.2-15.8-27.5-15.9l-47.6-.2C86.5 386.8 68.8 400 48 400c-26.5 0-48-21.5-48-48s21.5-48 48-48c5.9 0 11.6 1.1 16.9 3.1L85 271.9c5.6-9.8 5.6-21.9 0-31.8L64.9 204.9c-5.3 2-10.9 3.1-16.9 3.1c-26.5 0-48-21.5-48-48s21.5-48 48-48c20.8 0 38.5 13.2 45.2 31.7l47.6-.2c11.3 0 21.8-6.1 27.5-15.9l25-42.8C182.7 76 176 62.8 176 48c0-26.5 21.5-48 48-48s48 21.5 48 48zM224 320a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" })] })));
};
export default IpsBadgeSheriffIcon;
//# sourceMappingURL=ips-badge-sheriff.js.map