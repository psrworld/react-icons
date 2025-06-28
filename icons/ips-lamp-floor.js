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
export const IpsLampFloorIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-lamp-floor ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-lamp-floor" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M66.3 20.1C71.1 8 82.9 0 96 0L288 0c13.1 0 24.9 8 29.7 20.1l64 160c3.9 9.9 2.7 21-3.2 29.8s-15.9 14.1-26.5 14.1L32 224c-10.6 0-20.5-5.3-26.5-14.1s-7.2-20-3.2-29.8l64-160zM160 256l64 0 0 192 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0 0-192z" })] })));
};
export default IpsLampFloorIcon;
//# sourceMappingURL=ips-lamp-floor.js.map