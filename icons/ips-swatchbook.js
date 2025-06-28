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
export const IpsSwatchbookIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-swatchbook ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-swatchbook" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 32C0 14.3 14.3 0 32 0L160 0c17.7 0 32 14.3 32 32l0 384c0 53-43 96-96 96s-96-43-96-96L0 32zM223.6 425.9c.3-3.3 .4-6.6 .4-9.9l0-262 75.4-75.4c12.5-12.5 32.8-12.5 45.3 0l90.5 90.5c12.5 12.5 12.5 32.8 0 45.3L223.6 425.9zM182.8 512l192-192L480 320c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-297.2 0zM128 64L64 64l0 64 64 0 0-64zM64 192l0 64 64 0 0-64-64 0zM96 440a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" })] })));
};
export default IpsSwatchbookIcon;
//# sourceMappingURL=ips-swatchbook.js.map