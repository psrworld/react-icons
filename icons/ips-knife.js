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
export const IpsKnifeIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-knife ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-knife" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M217.5 249.3l242-242c4.7-4.7 11-7.3 17.6-7.3c11.2 0 21 7.5 23.5 18.4C505.3 38.6 512 71.5 512 96c0 83.3-48.2 130.5-128.9 209.4c-6.5 6.4-13.3 13-20.3 19.9c-12.1 11.9-28.4 18.7-45.3 18.7l-11 0c-17 0-33.3-6.7-45.3-18.7l-14.6-14.6-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192 16-16 .1-.1z" })] })));
};
export default IpsKnifeIcon;
//# sourceMappingURL=ips-knife.js.map