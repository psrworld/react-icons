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
export const IpsBalloonIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-balloon ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-balloon" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 192C0 86 86 0 192 0S384 86 384 192c0 102.6-102.8 194.9-143.6 227.5c-9.3 7.4-12.5 20.4-7.1 31l21.4 42.7c.9 1.8 1.4 3.8 1.4 5.8c0 7.1-5.8 12.9-12.9 12.9l-102.1 0c-7.1 0-12.9-5.8-12.9-12.9c0-2 .5-4 1.4-5.8l21.4-42.7c5.3-10.6 2.1-23.6-7.1-31C102.8 386.9 0 294.6 0 192zm96-16c0-44.2 35.8-80 80-80c8.8 0 16-7.2 16-16s-7.2-16-16-16C114.1 64 64 114.1 64 176c0 8.8 7.2 16 16 16s16-7.2 16-16z" })] })));
};
export default IpsBalloonIcon;
//# sourceMappingURL=ips-balloon.js.map