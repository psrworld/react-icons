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
export const IpsDrawCircleIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-draw-circle ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-draw-circle" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M472.1 196.7c-20.8-76-80.7-135.9-156.7-156.7C305.8 16.5 282.8 0 256 0s-49.8 16.5-59.3 39.9c-76 20.8-135.9 80.7-156.7 156.7C16.5 206.2 0 229.2 0 256s16.5 49.8 39.9 59.3c20.8 76 80.7 135.9 156.7 156.7c9.5 23.4 32.5 39.9 59.3 39.9s49.8-16.5 59.3-39.9c76-20.8 135.9-80.7 156.7-156.7c23.4-9.5 39.9-32.5 39.9-59.3s-16.5-49.8-39.9-59.3zM408 206c-14.7 11.7-24 29.8-24 50s9.4 38.3 24 50c-15.8 48.2-53.9 86.2-102 102c-11.7-14.7-29.8-24-50-24s-38.3 9.4-50 24c-48.2-15.8-86.2-53.9-102-102c14.7-11.7 24-29.8 24-50s-9.4-38.3-24-50c15.8-48.2 53.9-86.2 102-102c11.7 14.7 29.8 24 50 24s38.3-9.4 50-24c48.2 15.8 86.2 53.9 102 102z" })] })));
};
export default IpsDrawCircleIcon;
//# sourceMappingURL=ips-draw-circle.js.map