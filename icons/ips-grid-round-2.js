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
export const IpsGridRound2Icon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-grid-round-2 ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-grid-round-2" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M128 32a96 96 0 1 0 0 192 96 96 0 1 0 0-192zm0 256a96 96 0 1 0 0 192 96 96 0 1 0 0-192zM288 128a96 96 0 1 0 192 0 96 96 0 1 0 -192 0zm96 160a96 96 0 1 0 0 192 96 96 0 1 0 0-192z" })] })));
};
export default IpsGridRound2Icon;
//# sourceMappingURL=ips-grid-round-2.js.map