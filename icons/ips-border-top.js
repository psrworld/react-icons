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
export const IpsBorderTopIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-border-top ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-border-top" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 64C0 46.3 14.3 32 32 32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64zm64 96A32 32 0 1 1 0 160a32 32 0 1 1 64 0zm320 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-128 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM0 352a32 32 0 1 1 64 0A32 32 0 1 1 0 352zm448 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-256 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM64 256A32 32 0 1 1 0 256a32 32 0 1 1 64 0zm320 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-128 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM0 448a32 32 0 1 1 64 0A32 32 0 1 1 0 448zm448 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-256 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM160 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM96 448a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm256 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" })] })));
};
export default IpsBorderTopIcon;
//# sourceMappingURL=ips-border-top.js.map