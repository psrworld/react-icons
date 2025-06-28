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
export const IpsRaindropsIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-raindrops ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-raindrops" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M102.4 133.6c-4.2 8.6-6.4 18-6.4 27.6c0 34.7 28.1 62.8 62.8 62.8l2.4 0c34.7 0 62.8-28.1 62.8-62.8c0-9.6-2.2-19-6.4-27.6L171.5 39.2c-2.1-4.4-6.6-7.2-11.5-7.2s-9.4 2.8-11.5 7.2l-46.1 94.4zm-96 192c-4.2 8.6-6.4 18-6.4 27.6C0 387.9 28.1 416 62.8 416l2.4 0c34.7 0 62.8-28.1 62.8-62.8c0-9.6-2.2-19-6.4-27.6L75.5 231.2c-2.1-4.4-6.6-7.2-11.5-7.2s-9.4 2.8-11.5 7.2L6.4 325.6zM307.8 134.8L210 294.2c-11.8 19.2-18 41.3-18 63.8c0 67.4 54.6 122 122 122l12 0c67.4 0 122-54.6 122-122c0-22.5-6.2-44.6-18-63.8L332.2 134.8c-2.6-4.2-7.2-6.8-12.2-6.8s-9.6 2.6-12.2 6.8z" })] })));
};
export default IpsRaindropsIcon;
//# sourceMappingURL=ips-raindrops.js.map