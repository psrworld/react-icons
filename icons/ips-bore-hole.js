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
export const IpsBoreHoleIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-bore-hole ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-bore-hole" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M256 0c-17.7 0-32 14.3-32 32l0 264.6c-19.1 11.1-32 31.7-32 55.4c0 35.3 28.7 64 64 64s64-28.7 64-64c0-23.7-12.9-44.4-32-55.4L288 32c0-17.7-14.3-32-32-32zM48 128c-26.5 0-48 21.5-48 48L0 464c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-80 0c-17.7 0-32 14.3-32 32l0 192c0 53-43 96-96 96s-96-43-96-96l0-192c0-17.7-14.3-32-32-32l-80 0z" })] })));
};
export default IpsBoreHoleIcon;
//# sourceMappingURL=ips-bore-hole.js.map