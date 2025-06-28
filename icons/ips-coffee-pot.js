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
export const IpsCoffeePotIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-coffee-pot ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-coffee-pot" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 128c0-17.7 14.3-32 32-32l12.8 0 34 84.9C95 215.9 64 272.3 64 336l0 8c0 55.5 34.6 99.4 55.9 121.2c9.9 10.2 23.9 14.8 38.1 14.8L418 480c14.2 0 28.1-4.7 38.1-14.8C477.4 443.4 512 399.5 512 344l0-8c0-63.7-31-120.1-78.8-155.1L478.1 68.8c1.3-3.2 1.9-6.6 1.9-10C480 44 468 32 453.2 32L192 32l-69.2 0L96 32C43 32 0 75 0 128l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64zm65 192c5.2-41.4 30.1-76.6 65-96l188 0c34.9 19.4 59.8 54.6 65 96l-318 0z" })] })));
};
export default IpsCoffeePotIcon;
//# sourceMappingURL=ips-coffee-pot.js.map