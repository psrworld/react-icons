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
export const IpsLinkSimpleIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-link-simple ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-link-simple" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 256C0 167.6 71.6 96 160 96l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96 43-96 96s43 96 96 96l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96-43 96-96s-43-96-96-96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c88.4 0 160 71.6 160 160zM192 224l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" })] })));
};
export default IpsLinkSimpleIcon;
//# sourceMappingURL=ips-link-simple.js.map