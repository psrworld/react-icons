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
export const IpsPersonFallingIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-person-falling ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-person-falling" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M288 0c17.7 0 32 14.3 32 32l0 9.8c0 54.6-27.9 104.6-72.5 133.6l.2 .3L304.5 256l87.5 0c15.1 0 29.3 7.1 38.4 19.2l43.2 57.6c10.6 14.1 7.7 34.2-6.4 44.8s-34.2 7.7-44.8-6.4L384 320l-96 0-1.4 0 92.3 142.6c9.6 14.8 5.4 34.6-9.5 44.3s-34.6 5.4-44.3-9.5L164.5 249.2c-2.9 9.2-4.5 19-4.5 29l0 73.8c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-73.8c0-65.1 39.6-123.7 100.1-147.9C232.3 115.8 256 80.8 256 41.8l0-9.8c0-17.7 14.3-32 32-32zM112 32a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" })] })));
};
export default IpsPersonFallingIcon;
//# sourceMappingURL=ips-person-falling.js.map