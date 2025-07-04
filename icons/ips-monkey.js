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
export const IpsMonkeyIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-monkey ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-monkey" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M160 416c0-89.7 61.4-165 144.5-186.1C329.1 265 369.9 288 416 288c9.8 0 19.4-1 28.7-3L526.5 363c31.6 30.2 49.5 72 49.5 115.7l0 1.2c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-1.2c0-26.2-10.7-51.3-29.7-69.4L416 346.1 416 448l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0-256 0C71.6 512 0 440.4 0 352L0 110.1C0 49.3 49.3 0 110.1 0l10.4 0c57.2 0 102.8 47.8 100.1 104.9c-2.3 48.2-38.6 88-86.4 94.6l-1.9 .3c-17.5 2.4-33.7-9.8-36.1-27.3s9.8-33.7 27.3-36.1l1.9-.3c17.3-2.4 30.4-16.7 31.2-34.2c1-20.6-15.5-37.9-36.2-37.9l-10.4 0C84.7 64 64 84.7 64 110.1L64 352c0 53 43 96 96 96l0-32zM416 256c-29.3 0-55.9-12.2-74.8-31.7c-9-9.3-16.2-20.2-21.3-32.3c-35.3 0-64-28.7-64-64s28.6-64 64-64c15.7-37.6 52.8-64 96-64s80.4 26.4 96 64c35.3 0 64 28.7 64 64s-28.6 64-64 64c-15.7 37.6-52.8 64-96 64zM384 64c-26.5 0-48 21.5-48 48c0 20.8 13.2 38.4 31.6 45.1c4.7 1.7 8.4 5.9 8.4 10.9c0 22.1 17.9 40 40 40s40-17.9 40-40c0-5 3.7-9.2 8.4-10.9c18.5-6.7 31.6-24.4 31.6-45.1c0-26.5-21.5-48-48-48l-64 0zm0 32a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm48 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" })] })));
};
export default IpsMonkeyIcon;
//# sourceMappingURL=ips-monkey.js.map