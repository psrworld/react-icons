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
export const IpsCactusIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-cactus ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-cactus" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M160 96c0-53 43-96 96-96s96 43 96 96l0 256 48 0c8.8 0 16-7.2 16-16l0-64c0-26.5 21.5-48 48-48s48 21.5 48 48l0 64c0 61.9-50.1 112-112 112l-48 0 0 16c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-144-48 0C50.1 320 0 269.9 0 208l0-64c0-26.5 21.5-48 48-48s48 21.5 48 48l0 64c0 8.8 7.2 16 16 16l48 0 0-128zm80 64a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 240a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" })] })));
};
export default IpsCactusIcon;
//# sourceMappingURL=ips-cactus.js.map