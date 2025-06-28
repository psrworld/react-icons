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
export const IpsCowbellIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-cowbell ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-cowbell" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M112 96l16 0 0-56c0-22.1 17.9-40 40-40L280 0c22.1 0 40 17.9 40 40l0 56 16 0c21.4 0 40.3 14.2 46.2 34.8l64 224c4.1 14.5 1.2 30.1-7.8 42.1s-23.3 19.1-38.3 19.1L48 416c-15.1 0-29.3-7.1-38.3-19.1s-12-27.6-7.8-42.1l64-224C71.7 110.2 90.6 96 112 96zm160 0l0-48-96 0 0 48 96 0zm16 352c0 35.3-28.7 64-64 64s-64-28.7-64-64l128 0z" })] })));
};
export default IpsCowbellIcon;
//# sourceMappingURL=ips-cowbell.js.map