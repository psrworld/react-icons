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
export const IpsFileChartPieIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-file-chart-pie ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-file-chart-pie" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zm40 320l-88 0c-8.8 0-16-7.2-16-16l0-88c0-8.8 7.2-16.1 16-14.9c53.5 7.1 95.9 49.5 103 103c1.2 8.8-6.1 16-14.9 16zM160 230l0 106c0 8.8 7.2 16 16 16l106 0c10.1 0 17.7 9.3 14.1 18.8C278.9 415.9 235.2 448 184 448c-66.3 0-120-53.7-120-120c0-51.2 32.1-94.9 77.2-112.2c9.5-3.6 18.8 4 18.8 14.1z" })] })));
};
export default IpsFileChartPieIcon;
//# sourceMappingURL=ips-file-chart-pie.js.map