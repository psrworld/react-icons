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
export const IpsBellSchoolIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-bell-school ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-bell-school" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M208 128a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 288A208 208 0 1 0 208 0a208 208 0 1 0 0 416zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM208 448c-54 0-103.9-17.9-144-48l0 64c0 26.5 21.5 48 48 48l208 0 32 0 40 0c43.4 0 80.1-28.8 92-68.3c16.6-7.6 28-24.3 28-43.7c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15.5 7.3 29.2 18.7 38c-8 15.4-24.1 26-42.7 26l-40 0 0-64c-40.1 30.1-90 48-144 48z" })] })));
};
export default IpsBellSchoolIcon;
//# sourceMappingURL=ips-bell-school.js.map