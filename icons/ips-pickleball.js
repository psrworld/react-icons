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
export const IpsPickleballIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-pickleball ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-pickleball" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M250.4 28c37.5-37.4 98.4-37.4 136 0L499.9 141.3c29.2 29.2 35.7 72.4 19.4 107.8c-24.9-15.8-54.4-25-86.1-25c-72 0-133 47.3-153.3 112.5L155.7 212.8c-6.3-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L273 374.9c-.2 3-.3 6.1-.3 9.1c0 27.8 7.1 53.8 19.6 76.6c-9.3 .5-18.7-1-27.6-4.7l-56.7-23.2c-23.9-9.8-51.4-4.3-69.6 13.9L84.4 500.3c-15.6 15.6-41 15.6-56.7 0s-15.6-40.9 0-56.5l53.5-53.4c18.4-18.3 23.8-45.8 13.9-69.8L71.1 262.8c-10-23.9-4.5-51.4 13.9-69.7L250.4 28zM304 384a128 128 0 1 1 256 0 128 128 0 1 1 -256 0zm32-16a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm80 80a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm0-64a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm96 0a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm-80-80a16 16 0 1 0 32 0 16 16 0 1 0 -32 0z" })] })));
};
export default IpsPickleballIcon;
//# sourceMappingURL=ips-pickleball.js.map