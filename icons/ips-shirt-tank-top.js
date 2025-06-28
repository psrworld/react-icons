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
export const IpsShirtTankTopIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-shirt-tank-top ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-shirt-tank-top" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M112 32C112 14.3 97.7 0 80 0S48 14.3 48 32l0 32c0 91-19.2 143.6-33.3 170.1C6.7 249.1 0 265.5 0 282.5L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-165.5c0-17-6.7-33.5-14.7-48.4C355.2 207.6 336 155 336 64l0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 48c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-48z" })] })));
};
export default IpsShirtTankTopIcon;
//# sourceMappingURL=ips-shirt-tank-top.js.map