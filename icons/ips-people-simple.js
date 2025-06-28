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
export const IpsPeopleSimpleIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-people-simple ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-people-simple" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M128 128A64 64 0 1 0 128 0a64 64 0 1 0 0 128zm-22.4 32c-41.6 0-76.3 31.9-79.7 73.4l-4.1 49.3c-2.5 29.8 15.7 56.1 42.2 65.6L64 464c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-115.7c26.5-9.5 44.7-35.8 42.2-65.6l-4.1-49.3C226.7 191.9 192 160 150.4 160l-44.8 0zM384 128A64 64 0 1 0 384 0a64 64 0 1 0 0 128zm-15.7 32c-28.6 0-53.7 18.9-61.5 46.4L267.7 343.2c-5.8 20.4 9.5 40.8 30.8 40.8l21.6 0 0 80c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-80 21.6 0c21.3 0 36.6-20.3 30.8-40.8L461.3 206.4c-7.9-27.5-33-46.4-61.5-46.4l-31.4 0z" })] })));
};
export default IpsPeopleSimpleIcon;
//# sourceMappingURL=ips-people-simple.js.map