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
export const IpsKerningIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-kerning ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-kerning" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M454.3 23.2c4-7.9 .7-17.5-7.2-21.5s-17.5-.7-21.5 7.2l-240 480c-4 7.9-.7 17.5 7.2 21.5s17.5 .7 21.5-7.2l240-480zM60.6 113.7C52.7 97.9 33.5 91.5 17.7 99.4S-4.5 126.5 3.4 142.3l128 256c5.4 10.8 16.5 17.7 28.6 17.7s23.2-6.8 28.6-17.7l128-256c7.9-15.8 1.5-35-14.3-42.9s-35-1.5-42.9 14.3L160 312.4 60.6 113.7zm320 284.6L403.8 352l152.4 0 23.2 46.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-128-256C503.2 102.9 492.1 96 480 96s-23.2 6.8-28.6 17.7l-128 256c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3zM480 199.6L524.2 288l-88.4 0L480 199.6z" })] })));
};
export default IpsKerningIcon;
//# sourceMappingURL=ips-kerning.js.map