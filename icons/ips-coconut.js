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
export const IpsCoconutIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-coconut ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-coconut" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M141.2 141.2c-43.7 43.7-73 91.8-85.8 133.3c-13.2 42.7-7.4 71.9 7.5 86.7s44 20.6 86.7 7.5c41.5-12.8 89.6-42.1 133.3-85.8s73-91.8 85.8-133.3c13.2-42.7 7.4-71.9-7.5-86.7s-44-20.6-86.7-7.5C233 68.1 184.9 97.5 141.2 141.2zM260.4 9.5C309.6-5.7 361.5-4.8 395.2 28.8l40.9 40.9C484.7 118.4 512 184.3 512 252.9C512 396 396 512 253 512c-68.7 0-134.6-27.3-183.2-75.9l-41-41C-4.8 361.5-5.7 309.6 9.5 260.3c15.6-50.4 49.7-105 97.8-153.1S210 25 260.4 9.5zm63.5 88.1c25 25-5.4 95.9-67.9 158.4s-133.4 92.9-158.4 67.9s5.4-95.9 67.9-158.4S298.9 72.6 323.9 97.6zm95.4 107.1c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l32 32c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-32-32zm-56 136c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l32 32c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-32-32zm-136 56c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l32 32c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-32-32z" })] })));
};
export default IpsCoconutIcon;
//# sourceMappingURL=ips-coconut.js.map