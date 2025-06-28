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
export const IpsBorderBottomRightIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-border-bottom-right ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-border-bottom-right" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M448 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 336c0 8.8-7.2 16-16 16L32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l336 0c44.2 0 80-35.8 80-80l0-336zM288 64a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM96 64a32 32 0 1 0 64 0A32 32 0 1 0 96 64zm96 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM0 64a32 32 0 1 0 64 0A32 32 0 1 0 0 64zM32 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0 128a32 32 0 1 0 0 64 32 32 0 1 0 0-64z" })] })));
};
export default IpsBorderBottomRightIcon;
//# sourceMappingURL=ips-border-bottom-right.js.map