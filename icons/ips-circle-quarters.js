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
export const IpsCircleQuartersIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-circle-quarters ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-circle-quarters" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M120.2 391.8L256 256 391.8 391.8C426.5 357 448 309 448 256s-21.5-101-56.2-135.8L256 256 120.2 120.2C85.5 155 64 203 64 256s21.5 101 56.2 135.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" })] })));
};
export default IpsCircleQuartersIcon;
//# sourceMappingURL=ips-circle-quarters.js.map