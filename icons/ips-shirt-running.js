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
export const IpsShirtRunningIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-shirt-running ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-shirt-running" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M80 0c17.7 0 32 14.3 32 32l0 48c0 44.2 35.8 80 80 80s80-35.8 80-80l0-48c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32c0 33.3 2.6 61.5 6.5 85.2L0 393.8 0 282.5c0-17 6.7-33.5 14.7-48.4C28.8 207.6 48 155 48 64l0-32C48 14.3 62.3 0 80 0zM3.8 469.8L360.4 215c3 7.5 6 13.8 8.9 19c8 15 14.7 31.5 14.7 48.4L384 448c0 35.3-28.7 64-64 64L64 512c-27.7 0-51.3-17.6-60.2-42.2z" })] })));
};
export default IpsShirtRunningIcon;
//# sourceMappingURL=ips-shirt-running.js.map