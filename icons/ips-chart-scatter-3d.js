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
export const IpsChartScatter3dIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-chart-scatter-3d ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-chart-scatter-3d" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M32 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 209L43.5 423.4c-13.6 11.3-15.4 31.5-4.1 45.1s31.5 15.4 45.1 4.1L256 329.7 427.5 472.6c13.6 11.3 33.8 9.5 45.1-4.1s9.5-33.8-4.1-45.1L288 273l0-209zm96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32 160a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm64-64a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM160 160a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM64 256A32 32 0 1 0 0 256a32 32 0 1 0 64 0zM256 480a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" })] })));
};
export default IpsChartScatter3dIcon;
//# sourceMappingURL=ips-chart-scatter-3d.js.map