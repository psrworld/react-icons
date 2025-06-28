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
export const IpsBedBunkIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-bed-bunk ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-bed-bunk" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 192 0 256 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 0-32 0-128 0-32 0-64 0-32 0-48C576 50.1 525.9 0 464 0L256 0c-17.7 0-32 14.3-32 32l0 96L64 128l0-96zM512 256l-256 0c-17.7 0-32 14.3-32 32l0 96L64 384l0-192 192 0 256 0 0 64zM192 304a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM144 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" })] })));
};
export default IpsBedBunkIcon;
//# sourceMappingURL=ips-bed-bunk.js.map