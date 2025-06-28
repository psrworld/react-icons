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
export const IpsFlashlightIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-flashlight ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-flashlight" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M576 416l32 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-32 0 0 320zM544 97.7C449.1 107.9 384 160 384 160L48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l336 0s65.1 52.1 160 62.3l0-316.5zM224 256c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32z" })] })));
};
export default IpsFlashlightIcon;
//# sourceMappingURL=ips-flashlight.js.map