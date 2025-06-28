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
export const IpsFlowerIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-flower ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-flower" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M128 480c38.2 0 72.5-16.8 96-43.3c23.5 26.6 57.8 43.3 96 43.3c70.7 0 128-57.3 128-128c0-38.2-16.8-72.5-43.3-96c26.6-23.5 43.3-57.8 43.3-96c0-70.7-57.3-128-128-128c-38.2 0-72.5 16.8-96 43.3C200.5 48.8 166.2 32 128 32C57.3 32 0 89.3 0 160c0 38.2 16.8 72.5 43.3 96C16.8 279.5 0 313.8 0 352c0 70.7 57.3 128 128 128zm96-304a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" })] })));
};
export default IpsFlowerIcon;
//# sourceMappingURL=ips-flower.js.map