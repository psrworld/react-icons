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
export const IpsFlyingDiscIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-flying-disc ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-flying-disc" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M23.7 456.3C-1.5 431.1-5.9 389.6 7.1 341.4c3.2 9.5 8.4 18.5 16.2 26.3c15.6 15.6 36 20.7 55 20.5c18.8-.1 38.8-5.3 58.2-13.3c39-16.1 82-46 121.2-85.1s69-82.2 85.1-121.2c8-19.4 13.2-39.4 13.3-58.2c.1-19-5-39.5-20.5-55c-7.8-7.8-16.8-13-26.3-16.2c48.2-13 89.8-8.6 114.9 16.6c55.3 55.3 10.5 189.8-100.2 300.5S79 511.6 23.7 456.3zM235.1 267.1C161.4 340.9 76.7 375.8 46 345s4.1-115.4 77.9-189.2S282.3 47.2 313 77.9s-4.1 115.4-77.9 189.2z" })] })));
};
export default IpsFlyingDiscIcon;
//# sourceMappingURL=ips-flying-disc.js.map