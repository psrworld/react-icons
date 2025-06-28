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
export const IpsSlidersUpIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-sliders-up ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-sliders-up" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M96 0c17.7 0 32 14.3 32 32l0 54.7c28.3 12.3 48 40.5 48 73.3s-19.7 61-48 73.3L128 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-246.7C35.7 221 16 192.8 16 160s19.7-61 48-73.3L64 32C64 14.3 78.3 0 96 0zm0 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM256 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm80-32c0 32.8-19.7 61-48 73.3l0 54.7c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-54.7c-28.3-12.3-48-40.5-48-73.3s19.7-61 48-73.3L224 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 246.7c28.3 12.3 48 40.5 48 73.3zM448 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0 73.3L448 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-214.7c-28.3-12.3-48-40.5-48-73.3s19.7-61 48-73.3L384 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 86.7c28.3 12.3 48 40.5 48 73.3s-19.7 61-48 73.3z" })] })));
};
export default IpsSlidersUpIcon;
//# sourceMappingURL=ips-sliders-up.js.map