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
export const IpsBracketRoundRightIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 192 512", fill: color, className: `react-icon solid-icon ips-bracket-round-right ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-bracket-round-right" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M37.4 46.2C27.6 61 31.5 80.8 46.3 90.6C71.9 107.7 128 167 128 256s-56.1 148.3-81.8 165.4c-14.7 9.8-18.7 29.7-8.9 44.4s29.7 18.7 44.4 8.9C120.1 449 192 371.8 192 256S120.1 62.9 81.8 37.4C67 27.6 47.2 31.5 37.4 46.2z" })] })));
};
export default IpsBracketRoundRightIcon;
//# sourceMappingURL=ips-bracket-round-right.js.map