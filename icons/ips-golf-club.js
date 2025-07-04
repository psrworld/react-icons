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
export const IpsGolfClubIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-golf-club ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-golf-club" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M508.6 46.3c7.9-15.8 1.5-35-14.3-42.9s-35-1.5-42.9 14.3L264 392.5l0-.5L42.1 318C21.4 311.1 0 326.6 0 348.4L0 376l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L0 408l0 32 48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L0 472l0 8c0 17.7 14.3 32 32 32l223.3 0c12 .3 23.6-6.3 29.3-17.7l224-448z" })] })));
};
export default IpsGolfClubIcon;
//# sourceMappingURL=ips-golf-club.js.map