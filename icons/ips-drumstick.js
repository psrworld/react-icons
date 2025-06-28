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
export const IpsDrumstickIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-drumstick ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-drumstick" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M150.6 287.8c6-6 9.4-14.1 9.4-22.6l0-89.2C160 78.8 238.8 0 336 0s176 78.8 176 176s-78.8 176-176 176l-89.2 0c-8.5 0-16.6 3.4-22.6 9.4l-26.8 26.8c-12.3 12.3-11.4 32.5-7.2 49.4c1.1 4.6 1.8 9.5 1.8 14.5c0 33.1-26.9 60-60 60s-60-26.9-60-60c0-6.3-5.7-12-12-12c-33.1 0-60-26.9-60-60s26.9-60 60-60c5 0 9.8 .6 14.5 1.8c16.9 4.2 37.1 5.2 49.4-7.2l26.8-26.8z" })] })));
};
export default IpsDrumstickIcon;
//# sourceMappingURL=ips-drumstick.js.map