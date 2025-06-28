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
export const IpsBrightnessIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-brightness ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-brightness" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M224 80l0-48c0-17.7 14.3-32 32-32s32 14.3 32 32l0 48c0 17.7-14.3 32-32 32s-32-14.3-32-32zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM0 256c0-17.7 14.3-32 32-32l48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32zm432-32l48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zM256 512c-17.7 0-32-14.3-32-32l0-48c0-17.7 14.3-32 32-32s32 14.3 32 32l0 48c0 17.7-14.3 32-32 32zM73.4 438.6c-12.5-12.5-12.5-32.8 0-45.3l32-32c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-32 32c-12.5 12.5-32.8 12.5-45.3 0zm288-333.3l32-32c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-32 32c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3zm77.3 333.3c-12.5 12.5-32.8 12.5-45.3 0l-32-32c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l32 32c12.5 12.5 12.5 32.8 0 45.3zm-333.3-288l-32-32c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l32 32c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0z" })] })));
};
export default IpsBrightnessIcon;
//# sourceMappingURL=ips-brightness.js.map