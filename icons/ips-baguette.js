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
export const IpsBaguetteIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-baguette ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-baguette" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M583 234.5c58.8-39.2 74.7-118.7 35.5-177.5S499.8-17.7 441 21.5L356.5 77.8l70.8 70.8c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L329.3 95.9l-88 58.7 74 74c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-78.6-78.6-88 58.7 77.2 77.2c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L98.9 249.5 57 277.5C-1.8 316.7-17.7 396.2 21.5 455s118.7 74.7 177.5 35.5l384-256z" })] })));
};
export default IpsBaguetteIcon;
//# sourceMappingURL=ips-baguette.js.map