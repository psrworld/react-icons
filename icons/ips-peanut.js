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
export const IpsPeanutIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-peanut ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-peanut" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M432 0L364 0c-20.1 0-39.2 4-56.7 11.2c-17.4 7.2-33.7 17.8-47.8 32l-.4 .4C245 57.8 234.4 74 227.2 91.4c-4 9.5-6.9 19.6-8.8 30c-4.8 24.5-12.6 49.1-30.3 66.7s-42.2 25.4-66.7 30.3c-10.4 1.9-20.5 4.9-30 8.8c-17.5 7.2-33.9 17.9-48.1 32.1c-14.2 14.2-24.9 30.5-32.1 48C4 324.8 0 343.9 0 364l0 68c0 44.2 35.8 80 80 80l68 0c40.5 0 77.1-16.2 103.8-42.5c.6-.6 1.1-1.1 1.7-1.7c13.8-14 24.2-30.1 31.3-47.2c4-9.5 6.9-19.6 8.8-30c4.8-24.5 12.6-49.1 30.3-66.7s42.2-25.4 66.7-30.3c10.4-1.9 20.5-4.9 30-8.8c17.3-7.2 33.5-17.7 47.6-31.7l.9-.9C495.6 225.4 512 188.6 512 148l0-68c0-44.2-35.8-80-80-80zM396.8 128a19.2 19.2 0 1 1 38.4 0 19.2 19.2 0 1 1 -38.4 0zm0 64a19.2 19.2 0 1 1 38.4 0 19.2 19.2 0 1 1 -38.4 0zm-64 0a19.2 19.2 0 1 1 38.4 0 19.2 19.2 0 1 1 -38.4 0zm-224 224a19.2 19.2 0 1 1 38.4 0 19.2 19.2 0 1 1 -38.4 0zM192 396.8a19.2 19.2 0 1 1 0 38.4 19.2 19.2 0 1 1 0-38.4zm0-64a19.2 19.2 0 1 1 0 38.4 19.2 19.2 0 1 1 0-38.4z" })] })));
};
export default IpsPeanutIcon;
//# sourceMappingURL=ips-peanut.js.map