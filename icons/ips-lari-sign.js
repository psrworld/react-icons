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
export const IpsLariSignIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-lari-sign ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-lari-sign" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M144 32c17.7 0 32 14.3 32 32l0 32.7c5.3-.4 10.6-.7 16-.7s10.7 .2 16 .7L208 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 49.4c54.9 25.2 95.8 75.5 108.2 136.2c3.5 17.3-7.7 34.2-25 37.7s-34.2-7.7-37.7-25c-6.1-29.9-22.5-55.9-45.4-74.3l0 67.9c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-95c-5.2-.7-10.6-1-16-1s-10.8 .3-16 1l0 95c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-67.9C82.7 211.5 64 247.6 64 288c0 70.7 57.3 128 128 128l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l16.9 0C18.5 382 0 337.2 0 288c0-77.5 45.9-144.3 112-174.6L112 64c0-17.7 14.3-32 32-32z" })] })));
};
export default IpsLariSignIcon;
//# sourceMappingURL=ips-lari-sign.js.map