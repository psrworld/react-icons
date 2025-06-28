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
export const IpsMelonSliceIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-melon-slice ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-melon-slice" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M41 391c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9c115.6 115.6 302.6 116 418.3 .3S540.5 122.6 425 7c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9c96.9 96.9 97.1 253.6 .3 350.4S137.9 487.9 41 391zM320 128c0 106-86 192-192 192c-11.4 0-22.5-1-33.3-2.9c-5.4-.9-11 .6-14.8 4.5L59.3 342.2c-6.2 6.2-6.2 16.4 0 22.6l4 4c84.4 84.4 221.1 84.4 305.5 0c84.2-84.2 84.4-220.7 .3-305.1l-4.3-4.3c-6.2-6.2-16.4-6.2-22.6 0L321.6 79.8c-3.9 3.9-5.4 9.4-4.5 14.8c1.9 10.8 2.9 22 2.9 33.3z" })] })));
};
export default IpsMelonSliceIcon;
//# sourceMappingURL=ips-melon-slice.js.map