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
export const IpsStaffIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-staff ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-staff" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M284.2 44.2C297.8 17.1 325.5 0 355.8 0L432 0c44.2 0 80 35.8 80 80l0 103.9c0 35.7-23.7 67.1-58 76.9l-3.9 1.1c-4 1.2-7.5 3.9-9.5 7.5l-19 33.6c-4.3 7.7-14.1 10.4-21.8 6.1l-32.8-18.5c-3.7-2.1-8.1-2.6-12.3-1.5l-85.5 24.4c-2.6 .7-5 2.1-6.9 4.1L81.9 497.9c-18.7 18.7-49.1 18.7-67.9 0s-18.7-49.1 0-67.9l77.3-77.3c3-3 4.7-7.1 4.7-11.3L96 304c0-8.8 7.2-16 16-16l37.5 0c4.2 0 8.3-1.7 11.3-4.7l39.4-39.4c9.6-9.6 21.5-16.6 34.6-20.4l169.6-48.5c6.9-2 11.6-8.2 11.6-15.4l0-47.7c0-8.8-7.2-16-16-16l-28.2 0c-3.7 0-7.2 2.1-8.8 5.5c-11.9 23.7-40.7 33.3-64.4 21.5s-33.3-40.7-21.5-64.4l7.2-14.3z" })] })));
};
export default IpsStaffIcon;
//# sourceMappingURL=ips-staff.js.map