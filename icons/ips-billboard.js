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
export const IpsBillboardIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-billboard ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-billboard" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M448 32c0-17.7-14.3-32-32-32s-32 14.3-32 32L256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32L80 32C53.5 32 32 53.5 32 80l0 272c-17.7 0-32 14.3-32 32s14.3 32 32 32l48 0 208 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 208 0 48 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-272c0-26.5-21.5-48-48-48L448 32zM320 352L96 352 96 96l96 0 0 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-32 128 0 0 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-32 96 0 0 256-224 0z" })] })));
};
export default IpsBillboardIcon;
//# sourceMappingURL=ips-billboard.js.map