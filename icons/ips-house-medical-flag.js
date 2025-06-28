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
export const IpsHouseMedicalFlagIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-house-medical-flag ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-house-medical-flag" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M480 0c17.7 0 32 14.3 32 32l112 0c8.8 0 16 7.2 16 16l0 128c0 8.8-7.2 16-16 16l-112 0 0 320-64 0 0-320 0-160c0-17.7 14.3-32 32-32zM276.8 39.7L416 159l0 353 1 0-.2 0L96 512c-17.7 0-32-14.3-32-32l0-192-32 0c-13.4 0-25.4-8.3-30-20.9s-1-26.7 9.2-35.4l224-192c12-10.3 29.7-10.3 41.7 0zM224 208l0 48-48 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-48 0 0-48c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z" })] })));
};
export default IpsHouseMedicalFlagIcon;
//# sourceMappingURL=ips-house-medical-flag.js.map