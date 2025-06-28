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
export const IpsTurtleIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-turtle ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-turtle" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M384 249.2c0 21.4-17.4 38.8-38.8 38.8L70.8 288C49.4 288 32 270.6 32 249.2L32 208c0-97.2 78.8-176 176-176s176 78.8 176 176l0 41.2zM480 288c-2 0-4-.1-5.9-.3c-16.3 53.3-64.3 92.7-122.1 96l0 56.2c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-56-32 0 0 56c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-56-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l72 0 48 0 112 0 48 0 32 0c39.8 0 72-32.2 72-72l0-24 0-32 0-16c0-35.3 28.7-64 64-64c53 0 96 43 96 96l0 16c0 35.3-28.7 64-64 64l-32 0zm16-64a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" })] })));
};
export default IpsTurtleIcon;
//# sourceMappingURL=ips-turtle.js.map