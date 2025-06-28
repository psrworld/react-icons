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
export const IpsShieldCrossIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-shield-cross ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-shield-cross" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM256 66.8l32 13.6 0 47.7c0 17.7 14.3 32 32 32l111.3 0c-1.2 19.6-4.2 41.4-9.4 64l-102 0c-17.7 0-32 14.3-32 32l0 170.8c-10 6.5-20.7 12.5-32 18c-11.3-5.5-22-11.5-32-18L224 256c0-17.7-14.3-32-32-32L90.1 224c-5.2-22.6-8.1-44.4-9.4-64L192 160c17.7 0 32-14.3 32-32l0-47.7 32-13.6z" })] })));
};
export default IpsShieldCrossIcon;
//# sourceMappingURL=ips-shield-cross.js.map