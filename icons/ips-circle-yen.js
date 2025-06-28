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
export const IpsCircleYenIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-circle-yen ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-circle-yen" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM159.9 150.2c9.8-8.9 25-8.2 33.9 1.6L256 220.3l62.2-68.5c8.9-9.8 24.1-10.5 33.9-1.6s10.5 24.1 1.6 33.9L288.4 256l31.6 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-40 0 0 32 40 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-40 0 0 25c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-25-40 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l40 0 0-32-40 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l31.6 0-65.3-71.9c-8.9-9.8-8.2-25 1.6-33.9z" })] })));
};
export default IpsCircleYenIcon;
//# sourceMappingURL=ips-circle-yen.js.map