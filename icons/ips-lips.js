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
export const IpsLipsIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-lips ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-lips" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M288 101.3c3-2.4 6.2-4.8 9.7-7.3c17.8-12.7 46.8-30 78.3-30c20.3 0 42.8 9.3 61.4 19.2c20 10.6 41.1 24.7 60.2 39.5c19.1 14.8 37.1 31.2 50.8 46.5c6.8 7.6 13.1 15.7 17.9 23.7c4.3 7.2 9.7 18.3 9.7 31c0 9.2-2.6 19.1-5.3 27.5c-3 9.1-7.4 19.4-12.8 30.3c-10.8 21.7-26.8 46.9-47.7 71.1C468.8 400.9 404.7 448 320 448l-64 0c-84.7 0-148.8-47.1-190.2-95.1C44.9 328.8 29 303.5 18.1 281.8C12.7 271 8.4 260.7 5.3 251.5C2.6 243.1 0 233.2 0 224c0-12.8 5.5-23.8 9.7-31c4.8-8.1 11.1-16.1 17.9-23.7c13.6-15.3 31.7-31.7 50.8-46.5c19.1-14.9 40.2-29 60.2-39.5C157.2 73.3 179.7 64 200 64c31.5 0 60.6 17.2 78.3 30c3.4 2.5 6.7 4.9 9.7 7.3zM64 224c0 7.9 80 96 224 96s224-88.1 224-96c0-7.7-46.3-31.1-138.8-32c-3.4 0-6.9 .5-10.1 1.5C350 197.6 313.7 208 288 208s-62-10.4-75.1-14.4c-3.3-1-6.7-1.6-10.1-1.5C110.3 192.9 64 216.3 64 224z" })] })));
};
export default IpsLipsIcon;
//# sourceMappingURL=ips-lips.js.map