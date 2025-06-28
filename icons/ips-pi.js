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
export const IpsPiIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-pi ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-pi" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l64 0 0 156c0 39.7-9.3 78.9-27 114.5l-1.6 3.2c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l1.6-3.2C148.4 382.7 160 333.7 160 284l0-156 128 0 0 238.6c0 45 36.5 81.4 81.4 81.4c30.8 0 59-17.4 72.8-45l2.3-4.7c7.9-15.8 1.5-35-14.3-42.9s-35-1.5-42.9 14.3l-2.3 4.7c-3 5.9-9 9.6-15.6 9.6c-9.6 0-17.4-7.8-17.4-17.4L352 128l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 64z" })] })));
};
export default IpsPiIcon;
//# sourceMappingURL=ips-pi.js.map