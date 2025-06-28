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
export const IpsChampagneGlassIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 320 512", fill: color, className: `react-icon solid-icon ips-champagne-glass ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-champagne-glass" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M88 0C71.9 0 58.3 12 56.3 27.9L33.2 208C24.9 273.4 67.3 332.4 128 348l0 100-48 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l80 0 80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-48 0 0-100c60.7-15.6 103.1-74.6 94.8-140l-23-180.1C261.7 12 248.1 0 232 0L88 0zm20 128l8.2-64 87.7 0 8.2 64-104 0z" })] })));
};
export default IpsChampagneGlassIcon;
//# sourceMappingURL=ips-champagne-glass.js.map