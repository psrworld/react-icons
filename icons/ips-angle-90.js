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
export const IpsAngle90Icon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-angle-90 ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-angle-90" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 448c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 416 64 64zM96 97.6l0 48.3c31 3.6 60.4 12.5 87.4 25.7l25.3-41.1C174.2 113 136.2 101.6 96 97.6zm115.2 89.7c32.6 21 60.5 48.9 81.5 81.5l40.9-25.2c-25-39-58.2-72.2-97.2-97.2l-25.2 40.9zM334.1 384l48.3 0c-4-40.2-15.4-78.2-32.9-112.6l-41.1 25.3c13.2 26.9 22 56.3 25.7 87.4z" })] })));
};
export default IpsAngle90Icon;
//# sourceMappingURL=ips-angle-90.js.map