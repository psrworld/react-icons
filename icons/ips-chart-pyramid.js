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
export const IpsChartPyramidIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-chart-pyramid ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-chart-pyramid" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M290.6 59.7c-15.4-26.5-53.7-26.5-69.1 0L163 160 349 160 290.6 59.7zM69.6 320l372.8 0L367.7 192l-223.4 0L69.6 320zM51 352L11.4 419.8C-4.2 446.5 15.1 480 45.9 480l420.1 0c30.9 0 50.1-33.5 34.6-60.2L461 352 51 352z" })] })));
};
export default IpsChartPyramidIcon;
//# sourceMappingURL=ips-chart-pyramid.js.map