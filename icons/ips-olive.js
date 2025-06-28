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
export const IpsOliveIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-olive ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-olive" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M160 480C71.6 480 0 408.4 0 320C0 128 181.9 32 280 32c56 0 112 56 112 56s56 56 56 112c0 98.1-96 280-288 280zM287.1 192.9c30.3 30.3 69.6 40.1 87.8 21.9s8.4-57.5-21.9-87.8s-69.6-40.1-87.8-21.9s-8.4 57.5 21.9 87.8z" })] })));
};
export default IpsOliveIcon;
//# sourceMappingURL=ips-olive.js.map