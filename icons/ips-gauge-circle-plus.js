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
export const IpsGaugeCirclePlusIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-gauge-circle-plus ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-gauge-circle-plus" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M496 192c2.7 0 5.3 .1 8 .2C475.6 81.7 375.4 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c39.5 0 77-9 110.4-25C337.6 455.7 320 413.9 320 368c0-97.2 78.8-176 176-176zM320 352c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-26.9 16.5-49.9 40-59.3L232 88c0-13.3 10.7-24 24-24s24 10.7 24 24l0 204.7c23.5 9.5 40 32.5 40 59.3zM144 112a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM64 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM336 144a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm16-208l0 48 48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16z" })] })));
};
export default IpsGaugeCirclePlusIcon;
//# sourceMappingURL=ips-gauge-circle-plus.js.map