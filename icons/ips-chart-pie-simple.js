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
export const IpsChartPieSimpleIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-chart-pie-simple ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-chart-pie-simple" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M495.4 240L272 240l0-223.4c0-9 7-16.6 16-16.6C411.7 0 512 100.3 512 224c0 9-7.6 16-16.6 16zM190.2 37.2c18.1-3.8 33.8 11 33.8 29.5L224 288l221.3 0c18.5 0 33.3 15.7 29.5 33.8C451.9 430.5 355.5 512 240 512C107.5 512 0 404.6 0 272C0 156.5 81.5 60.1 190.2 37.2z" })] })));
};
export default IpsChartPieSimpleIcon;
//# sourceMappingURL=ips-chart-pie-simple.js.map