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
export const IpsOmegaIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-omega ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-omega" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M224 96C135.6 96 64 167.6 64 256c0 56.4 29.1 106 73.3 134.5c13.3 8.6 22.7 23.7 22.7 41.2c0 26.7-21.6 48.3-48.3 48.3L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l35.2 0C25.8 375.4 0 318.7 0 256C0 132.3 100.3 32 224 32s224 100.3 224 224c0 62.7-25.8 119.4-67.2 160l35.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-79.7 0c-26.7 0-48.3-21.6-48.3-48.3c0-17.5 9.4-32.6 22.7-41.2C354.9 362 384 312.4 384 256c0-88.4-71.6-160-160-160z" })] })));
};
export default IpsOmegaIcon;
//# sourceMappingURL=ips-omega.js.map