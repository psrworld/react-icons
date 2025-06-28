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
export const IpsRefrigeratorIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-refrigerator ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-refrigerator" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M96 0C43 0 0 43 0 96l0 64 288 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 64 0 0-64c0-53-43-96-96-96L96 0zM384 192l-64 0 0 176c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-176L0 192 0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-256z" })] })));
};
export default IpsRefrigeratorIcon;
//# sourceMappingURL=ips-refrigerator.js.map