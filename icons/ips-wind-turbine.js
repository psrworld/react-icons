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
export const IpsWindTurbineIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-wind-turbine ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-wind-turbine" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M315.7 414.8c9.1 14.8 32 6.5 29.5-10.7L316.9 212c-.5-3.4 .1-6.9 1.8-9.9L411 31.2c8.3-15.3-10.4-31-24-20.1L234.7 131.7c-2.7 2.1-6 3.4-9.5 3.5L31.1 140.6C13.7 141 9.5 165 25.7 171.4l180.6 71.5c3.2 1.3 5.9 3.5 7.7 6.5L315.7 414.8zM224 326.8L224 464l-72 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l208 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-72 0 0-33.2-64-104zM256 168a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" })] })));
};
export default IpsWindTurbineIcon;
//# sourceMappingURL=ips-wind-turbine.js.map