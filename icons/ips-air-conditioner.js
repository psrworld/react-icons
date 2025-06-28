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
export const IpsAirConditionerIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-air-conditioner ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-air-conditioner" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 0C28.7 0 0 28.7 0 64l0 96c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-96c0-35.3-28.7-64-64-64L64 0zM80 128l416 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 160c-8.8 0-16-7.2-16-16s7.2-16 16-16zM256 256l-64 0 0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-11.8 6.4-22.2 16-27.7c15.3-8.9 20.5-28.4 11.7-43.7s-28.4-20.5-43.7-11.7C83.4 349.4 64 380.4 64 416c0 53 43 96 96 96s96-43 96-96l0-160zm64 128c0 53 43 96 96 96s96-43 96-96c0-35.6-19.4-66.6-48-83.1c-15.3-8.8-34.9-3.6-43.7 11.7s-3.6 34.9 11.7 43.7c9.6 5.6 16 15.9 16 27.7c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-64 0 0 128z" })] })));
};
export default IpsAirConditionerIcon;
//# sourceMappingURL=ips-air-conditioner.js.map