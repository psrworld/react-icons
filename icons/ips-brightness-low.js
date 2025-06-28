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
export const IpsBrightnessLowIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-brightness-low ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-brightness-low" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M224 80a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm96 144a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM432 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM96 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM352 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm0-256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM160 384a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" })] })));
};
export default IpsBrightnessLowIcon;
//# sourceMappingURL=ips-brightness-low.js.map