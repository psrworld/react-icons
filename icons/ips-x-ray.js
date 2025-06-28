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
export const IpsXRayIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-x-ray ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-x-ray" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 64C0 46.3 14.3 32 32 32l448 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 320c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32L32 96C14.3 96 0 81.7 0 64zM256 96c-8.8 0-16 7.2-16 16l0 32-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 48-112 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l112 0 0 70.6L189.1 307c-5.2-2-10.6-3-16.2-3l-2.1 0c-23.6 0-42.8 19.2-42.8 42.8c0 9.6 3.2 18.9 9.1 26.4l18.2 23.2c9.7 12.4 24.6 19.6 40.3 19.6l120.8 0c15.7 0 30.6-7.2 40.3-19.6l18.2-23.2c5.9-7.5 9.1-16.8 9.1-26.4c0-23.6-19.2-42.8-42.8-42.8l-2.2 0c-5.5 0-11 1-16.2 3L272 326.6l0-70.6 112 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-112 0 0-48 80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-80 0 0-32c0-8.8-7.2-16-16-16zM208 352a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm80 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" })] })));
};
export default IpsXRayIcon;
//# sourceMappingURL=ips-x-ray.js.map