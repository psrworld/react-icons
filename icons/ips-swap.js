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
export const IpsSwapIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-swap ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-swap" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M237 141.6c-5.3 11.2-16.6 18.4-29 18.4l-48 0 0 192c0 35.3 28.7 64 64 64s64-28.7 64-64l0-192c0-70.7 57.3-128 128-128s128 57.3 128 128l0 192 48 0c12.4 0 23.7 7.2 29 18.4s3.6 24.5-4.4 34.1l-80 96c-6.1 7.3-15.1 11.5-24.6 11.5s-18.5-4.2-24.6-11.5l-80-96c-7.9-9.5-9.7-22.8-4.4-34.1s16.6-18.4 29-18.4l48 0 0-192c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 192c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-192-48 0c-12.4 0-23.7-7.2-29-18.4s-3.6-24.5 4.4-34.1l80-96C109.5 4.2 118.5 0 128 0s18.5 4.2 24.6 11.5l80 96c7.9 9.5 9.7 22.8 4.4 34.1z" })] })));
};
export default IpsSwapIcon;
//# sourceMappingURL=ips-swap.js.map