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
export const IpsLocationArrowUpIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-location-arrow-up ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-location-arrow-up" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M35.8 431.9L190.9 54.2C196.4 40.8 209.5 32 224 32s27.6 8.8 33.1 22.2L412.2 431.9c9.4 23-7.4 48.1-32.3 48.1c-7.8 0-15.3-2.6-21.4-7.3L224 368 89.4 472.7C83.3 477.4 75.8 480 68 480c-24.8 0-41.7-25.2-32.3-48.1z" })] })));
};
export default IpsLocationArrowUpIcon;
//# sourceMappingURL=ips-location-arrow-up.js.map