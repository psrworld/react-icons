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
export const IpsUpFromLineIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-up-from-line ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-up-from-line" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M37.9 185.4L166.5 42.6c6.1-6.7 14.7-10.6 23.8-10.6l3.5 0c9.1 0 17.7 3.9 23.8 10.6L346.1 185.4c3.8 4.2 5.9 9.8 5.9 15.5c0 12.8-10.4 23.1-23.1 23.1L256 224l0 128c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-128-72.9 0C42.4 224 32 213.6 32 200.9c0-5.7 2.1-11.2 5.9-15.5zM32 416l320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32z" })] })));
};
export default IpsUpFromLineIcon;
//# sourceMappingURL=ips-up-from-line.js.map