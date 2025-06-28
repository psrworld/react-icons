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
export const IpsScytheIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-scythe ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-scythe" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M614.7 .7c5.6 1.2 10.5 3.8 14.5 7.3c8.4 7.4 12.6 19 10.1 30.7l-4.8 22.6L577.6 326.7l-34.3 160c-3.7 17.3-20.7 28.3-38 24.6s-28.3-20.7-24.6-38l26-121.3L416 352c-17.7 0-32-14.3-32-32s14.3-32 32-32l104.4 0L569 61.3l7.7-36s0 0 0 0L582.1 0 608 0c2.2 0 4.5 .2 6.7 .7zM352 0L549.4 0l-4 18.6L508.3 192 12.7 192C5.7 192 0 186.3 0 179.2c0-2.1 .5-4.1 1.6-6C15 151.1 114.8 0 352 0z" })] })));
};
export default IpsScytheIcon;
//# sourceMappingURL=ips-scythe.js.map