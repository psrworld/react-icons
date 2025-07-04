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
export const IpsSirenIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-siren ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-siren" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M73 152.1L48 352l57.9 0 22.2-178c1.1-8.8 9.1-15 17.9-13.9s15 9.1 13.9 17.9L138.1 352 400 352 375 152.1C371 120 343.8 96 311.5 96l-175 0C104.2 96 77 120 73 152.1zM32 384c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32L32 384z" })] })));
};
export default IpsSirenIcon;
//# sourceMappingURL=ips-siren.js.map