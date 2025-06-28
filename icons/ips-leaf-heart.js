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
export const IpsLeafHeartIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-leaf-heart ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-leaf-heart" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M272 96s0 0 0 0l104 0c42.7 0 79.9-23.9 98.8-59.1c3.5-6.5 13.6-6.8 16.2 .1c13.5 36.5 21.1 77 21.1 119.6C512 317.1 405.1 447.3 273 448l-1 0c-81.7 0-150.4-55.7-170.2-131.2C68.7 347.5 48 391.4 48 440l0 16c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-16c0-75.1 38.3-141.2 96.4-179.9C102.5 168.5 178.8 96 272 96c0 0 0 0 0 0zM189.7 242.8c0 14.4 5.8 28.3 16.2 38.4l70.9 69c6.2 6 16.1 6 22.3 0l70.9-69c10.4-10.1 16.2-23.9 16.2-38.4c0-29.5-23.9-53.5-53.5-53.5l-1.5 0c-14.3 0-28.1 5.6-38.4 15.6l-4.9 4.8-4.9-4.8c-10.3-10-24-15.6-38.4-15.6l-1.5 0c-29.5 0-53.5 23.9-53.5 53.5z" })] })));
};
export default IpsLeafHeartIcon;
//# sourceMappingURL=ips-leaf-heart.js.map