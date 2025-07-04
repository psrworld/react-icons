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
export const IpsNarwhalIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-narwhal ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-narwhal" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M639.3 20.7c2.4-7.8-1.4-16.1-8.9-19.4s-16.2-.4-20.2 6.6L516.7 168.3c-16.9-5.4-34.9-8.3-53.6-8.3c-50.9 0-100.7 17.5-140.2 49.6L154.1 346.8c-10.5 8.5-26.1 1.1-26.1-12.4l0-81.3 29.9-20.9c21.4-15 34.1-39.4 34.1-65.5l0-54.7c0-6-3.3-11.4-8.6-14.2s-11.7-2.3-16.6 1.1L96 148.5 25.2 98.9c-4.9-3.4-11.3-3.8-16.6-1.1S0 106 0 112l0 54.7c0 26.1 12.7 50.6 34.1 65.5L64 253.1 64 352c0 88.4 71.6 160 160 160l240 0c97.2 0 176-78.8 176-176c0-51.4-22.3-97.7-57.8-129.9l57-185.4zM496 280a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" })] })));
};
export default IpsNarwhalIcon;
//# sourceMappingURL=ips-narwhal.js.map