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
export const IpsFiltersIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-filters ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-filters" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M232 32c-15.9 0-30.2 9.4-36.6 23.9s-3.6 31.5 7.2 43.2L352 261.5 352 368c0 10.1 4.7 19.6 12.8 25.6l64 48c9.7 7.3 22.7 8.4 33.5 3s17.7-16.5 17.7-28.6l0-154.5L629.4 99.1c10.7-11.7 13.6-28.6 7.2-43.2S615.9 32 600 32L232 32zM40 96c-15.9 0-30.2 9.4-36.6 23.9s-3.6 31.5 7.2 43.2L160 325.5l0 74.5c0 10.1 4.7 19.6 12.8 25.6l64 48c9.7 7.3 22.7 8.4 33.5 3s17.7-16.5 17.7-28.6l0-122.5 32-34.8 0-16.7L179 120.7c-6.7-7.3-11.7-15.7-14.9-24.7L40 96z" })] })));
};
export default IpsFiltersIcon;
//# sourceMappingURL=ips-filters.js.map