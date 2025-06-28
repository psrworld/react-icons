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
export const IpsSemicolonIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 192 512", fill: color, className: `react-icon solid-icon ips-semicolon ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-semicolon" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M96 64a64 64 0 1 1 0 128A64 64 0 1 1 96 64zm54.8 319L83.7 492.8C76.4 504.7 63.5 512 49.5 512C24 512 5 488.5 10.4 463.6L37.5 337c6.1-28.6 31.4-49 60.6-49c34.2 0 61.9 28.1 61.9 62.3c0 11.5-3.2 22.9-9.2 32.7z" })] })));
};
export default IpsSemicolonIcon;
//# sourceMappingURL=ips-semicolon.js.map