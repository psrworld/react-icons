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
export const IpsAxeIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-axe ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-axe" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M374.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3L384 301.3l0 82.7c0 17.7 14.3 32 32 32c123.7 0 224-100.3 224-224c0-17.7-14.3-32-32-32l-82.7 0-56-56 33.4-33.4c12.5-12.5 12.5-32.8 0-45.3l-16-16c-12.5-12.5-32.8-12.5-45.3 0L408 42.7 374.6 9.4zM448 316c45-11.6 80.4-47 92-92l32.8 0C560.1 286.7 510.7 336.1 448 348.8l0-32.8zM244.1 206.6L9.4 441.4c-12.5 12.5-12.5 32.8 0 45.3l16 16c12.5 12.5 32.8 12.5 45.3 0L305.4 267.9l-61.3-61.3z" })] })));
};
export default IpsAxeIcon;
//# sourceMappingURL=ips-axe.js.map