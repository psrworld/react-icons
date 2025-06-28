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
export const IpsForkliftIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-forklift ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-forklift" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M48 160l48 0L96 48c0-26.5 21.5-48 48-48L292.7 0c20.3 0 38.4 12.8 45.2 31.9l75.3 210.8c1.8 5.2 2.8 10.6 2.8 16.1l0 85.7c19.6 17.6 32 43.1 32 71.6c0 53-43 96-96 96s-96-43-96-96l-64 0c0 53-43 96-96 96s-96-43-96-96L0 208c0-26.5 21.5-48 48-48zm208 96l94 0L281.4 64 160 64l0 96 96 96zM96 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm256 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM544 32l0 352 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-384c0-17.7 14.3-32 32-32s32 14.3 32 32z" })] })));
};
export default IpsForkliftIcon;
//# sourceMappingURL=ips-forklift.js.map