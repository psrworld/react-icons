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
export const IpsTruckFireIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-truck-fire ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-truck-fire" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 24C0 37.3 10.7 48 24 48l8 0 0 50.7C13.4 105.3 0 123.1 0 144l0 80 384 0 0-128 0-16 0-32 232 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 0C10.7 0 0 10.7 0 24zM0 256L0 368c0 26.5 21.5 48 48 48l16 0c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l16 0c26.5 0 48-21.5 48-48l0-112 0-96c0-35.3-28.7-64-64-64l-16 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l-48 0-32 0 0 144 0 16-16 0L0 256zM280 48l56 0 0 48-56 0 0-48zM232 96l-48 0 0-48 48 0 0 48zM80 48l56 0 0 48L80 96l0-48zM576 160l0 96-96 0 0-96 96 0zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" })] })));
};
export default IpsTruckFireIcon;
//# sourceMappingURL=ips-truck-fire.js.map