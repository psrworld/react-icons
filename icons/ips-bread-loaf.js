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
export const IpsBreadLoafIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-bread-loaf ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-bread-loaf" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 192C0 64 176 32 240 32s240 32 240 160c0 35.3-28.7 64-64 64l0 176c0 26.5-21.5 48-48 48l-256 0c-26.5 0-48-21.5-48-48l0-176c-35.3 0-64-28.7-64-64zM397.4 34.9c-2-.9-4.1-1.9-6.2-2.8c3.1-.1 6-.2 8.8-.2c64 0 240 32 240 160c0 35.3-28.7 64-64 64l0 176c0 26.5-21.5 48-48 48l-96 0c10-13.4 16-30 16-48l0-149.5c37.3-13.2 64-48.7 64-90.5c0-82.2-57.6-130.7-114.6-157.1z" })] })));
};
export default IpsBreadLoafIcon;
//# sourceMappingURL=ips-bread-loaf.js.map