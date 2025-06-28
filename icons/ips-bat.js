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
export const IpsBatIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-bat ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-bat" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M235.6 52.8l10.8 14.4c6 8.1 15.5 12.8 25.6 12.8l32 0c10.1 0 19.6-4.7 25.6-12.8l10.8-14.4c2.3-3 5.8-4.8 9.6-4.8c5.8 0 10.8 4.1 11.8 9.8l19 101.4L452.6 125c16.2-7.7 35.5-3.6 47.1 10C548.9 192.4 576 265.6 576 341.2l0 37.6c0 9.7-10.2 16-18.9 11.7l-63.8-31.9c-7.5-3.7-16.6-1.1-20.9 6.1l-29.8 49.7c-5.4 8.9-17.7 10.4-25 3.1l-36.6-36.6c-6.8-6.8-18.1-6.1-24 1.6l-56.2 73.1c-6.4 8.3-19 8.3-25.4 0l-56.2-73.1c-5.9-7.7-17.2-8.4-24-1.6l-36.6 36.6c-7.4 7.4-19.7 5.8-25-3.1l-29.8-49.7c-4.3-7.2-13.4-9.8-20.9-6.1L18.9 390.5c-8.7 4.3-18.9-2-18.9-11.7l0-37.6C0 265.6 27.1 192.4 76.3 135c11.6-13.6 30.9-17.7 47.1-10l71.8 34.2 19-101.4c1.1-5.7 6-9.8 11.8-9.8c3.8 0 7.4 1.8 9.6 4.8z" })] })));
};
export default IpsBatIcon;
//# sourceMappingURL=ips-bat.js.map