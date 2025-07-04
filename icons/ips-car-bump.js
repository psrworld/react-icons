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
export const IpsCarBumpIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-car-bump ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-car-bump" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M145.1 120.6L292.4 81.2c12.7-3.4 26.3 1.3 34.1 12l37.8 51.6L114.6 211.6l7-63.6c1.4-13.1 10.8-24 23.5-27.4zM58 141.1L47.8 234.2C27.4 249.4 17.2 276 24.2 302.1L57.3 425.8l12.4 46.4c4.6 17.1 22.1 27.2 39.2 22.6l30.9-8.3c17.1-4.6 27.2-22.1 22.6-39.2L150 400.9l278.2-74.5 12.4 46.4c4.6 17.1 22.1 27.2 39.2 22.6l30.9-8.3c17.1-4.6 27.2-22.1 22.6-39.2L521 301.5 487.8 177.9c-7-26.1-29.1-44.1-54.4-47L378.1 55.3c-23.4-31.9-64-46.2-102.3-36L128.5 58.8C90.3 69.1 62.3 101.7 58 141.1zm58.9 136.2a32 32 0 1 1 16.6 61.8 32 32 0 1 1 -16.6-61.8zm255.6-35.3a32 32 0 1 1 61.8-16.6 32 32 0 1 1 -61.8 16.6zM584.8 512c19.5 0 34.7-17.7 25.8-35c-18.6-36.2-56.3-61-99.7-61s-81.2 24.8-99.7 61c-8.9 17.3 6.3 35 25.8 35l147.9 0z" })] })));
};
export default IpsCarBumpIcon;
//# sourceMappingURL=ips-car-bump.js.map