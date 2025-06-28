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
export const IpsMobileNotchIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-mobile-notch ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-mobile-notch" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M128 64l0 16c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16l0-16 32 0c8.8 0 16 7.2 16 16l0 352c0 8.8-7.2 16-16 16L96 448c-8.8 0-16-7.2-16-16L80 80c0-8.8 7.2-16 16-16l32 0zM96 0C51.8 0 16 35.8 16 80l0 352c0 44.2 35.8 80 80 80l192 0c44.2 0 80-35.8 80-80l0-352c0-44.2-35.8-80-80-80L96 0zm32 400c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0c-8.8 0-16 7.2-16 16z" })] })));
};
export default IpsMobileNotchIcon;
//# sourceMappingURL=ips-mobile-notch.js.map