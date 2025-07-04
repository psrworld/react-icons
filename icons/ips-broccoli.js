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
export const IpsBroccoliIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-broccoli ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-broccoli" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 256c0 53 43 96 96 96l320 0c53 0 96-43 96-96c0-45.5-31.6-83.6-74.1-93.5c6.4-10 10.1-21.8 10.1-34.5c0-35.3-28.7-64-64-64c-12.7 0-24.6 3.7-34.5 10.1C339.6 31.6 301.5 0 256 0s-83.6 31.6-93.5 74.1C152.6 67.7 140.7 64 128 64c-35.3 0-64 28.7-64 64c0 12.7 3.7 24.6 10.1 34.5C31.6 172.4 0 210.5 0 256zM192.2 490.3c5 12.8 17.1 21.7 30.9 21.7l65.9 0c13.8 0 25.9-8.9 30.9-21.7c17.6-45.3 39.6-82.1 56.1-106.3L280 384l-16.8 33.7c-2.9 5.9-11.4 5.9-14.3 0L232 384l-95.9 0c16.5 24.2 38.5 60.9 56.1 106.3z" })] })));
};
export default IpsBroccoliIcon;
//# sourceMappingURL=ips-broccoli.js.map