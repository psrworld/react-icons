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
export const IpsFontCaseIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-font-case ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-font-case" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M206 52.8C201.3 40.3 189.3 32 176 32s-25.3 8.3-30 20.8L2 436.8c-6.2 16.5 2.2 35 18.7 41.2s35-2.2 41.2-18.7L96.2 368l159.6 0L290 459.2c6.2 16.5 24.7 24.9 41.2 18.7s24.9-24.6 18.7-41.2L206 52.8zM231.8 304l-111.6 0L176 155.1 231.8 304zM608 160c-13 0-24.1 7.7-29.2 18.8C559.4 166.9 536.5 160 512 160c-70.7 0-128 57.3-128 128l0 64c0 70.7 57.3 128 128 128c24.5 0 47.4-6.9 66.8-18.8c5 11.1 16.2 18.8 29.2 18.8c17.7 0 32-14.3 32-32l0-96 0-64 0-96c0-17.7-14.3-32-32-32zM576 288l0 64c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64s64 28.7 64 64z" })] })));
};
export default IpsFontCaseIcon;
//# sourceMappingURL=ips-font-case.js.map