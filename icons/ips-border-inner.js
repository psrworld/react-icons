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
export const IpsBorderInnerIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-border-inner ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-border-inner" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 448A32 32 0 1 1 0 448a32 32 0 1 1 64 0zm96 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm0-384A32 32 0 1 1 96 64a32 32 0 1 1 64 0zM320 416a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM352 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64 352a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0-384a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM64 64A32 32 0 1 1 0 64a32 32 0 1 1 64 0zM416 320a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM64 352A32 32 0 1 1 0 352a32 32 0 1 1 64 0zM416 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM64 160A32 32 0 1 1 0 160a32 32 0 1 1 64 0zM0 256c0-17.7 14.3-32 32-32l160 0 0-160c0-17.7 14.3-32 32-32s32 14.3 32 32l0 160 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0 0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160L32 288c-17.7 0-32-14.3-32-32z" })] })));
};
export default IpsBorderInnerIcon;
//# sourceMappingURL=ips-border-inner.js.map