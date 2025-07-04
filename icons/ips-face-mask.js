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
export const IpsFaceMaskIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-face-mask ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-face-mask" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M410.5 281.7L541.8 222C525.1 96.7 417.9 0 288 0S50.9 96.7 34.2 222l131.3 59.7c8-15.3 24.1-25.7 42.5-25.7l160 0c18.4 0 34.5 10.4 42.5 25.7zm5.5 32.6l0 69.7 93.8 0c21.8-37.6 34.2-81.3 34.2-127.9L416 314.3zM413.3 416c-6.6 18.6-24.4 32-45.3 32l-160 0c-20.9 0-38.7-13.4-45.3-32l-74.6 0c46.9 58.5 119 96 199.9 96s152.9-37.5 199.9-96l-74.6 0zM160 384l0-69.7L32 256.1c0 46.6 12.5 90.3 34.2 127.9l93.8 0zm-4.7-180.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6C146.4 167 184.6 144 240 144c8.8 0 16 7.2 16 16s-7.2 16-16 16c-47 0-77.1 19.7-84.7 27.3zM336 176c-8.8 0-16-7.2-16-16s7.2-16 16-16c55.4 0 93.6 23 107.3 36.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0C413.1 195.7 383 176 336 176zM208 304c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0z" })] })));
};
export default IpsFaceMaskIcon;
//# sourceMappingURL=ips-face-mask.js.map