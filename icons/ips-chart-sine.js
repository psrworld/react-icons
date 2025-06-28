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
export const IpsChartSineIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-chart-sine ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-chart-sine" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm58.7 191.6c17.4 2.9 33.9-8.9 36.8-26.3c0 0 0 0 0 0c.7-4 1.7-7.9 2.8-11.8c2.1-7.7 5.5-17.7 10.3-27.3c10.5-21 22.3-30.3 35.4-30.3c12.1 0 19.3 4.5 26.6 15.6c8.9 13.4 15.1 32.6 22.9 57.9l.7 2.2c6.9 22.4 15.5 50.1 29.9 72c16.4 24.9 41.8 44.4 80 44.4c50.9 0 79.1-38.6 92.6-65.7c7.2-14.4 11.9-28.5 14.7-38.7c1.7-6 3.2-12.1 4.2-18.3c2.9-17.4-8.9-33.9-26.3-36.8s-33.9 8.9-36.8 26.3c0 0-.6 4-2.8 11.7c-2.1 7.7-5.5 17.7-10.3 27.3c-10.5 21-22.3 30.3-35.4 30.3c-12.1 0-19.3-4.5-26.6-15.6c-8.9-13.4-15.1-32.6-22.9-57.9l-.7-2.2c-6.9-22.4-15.5-50.1-29.9-72C271.6 115.5 246.2 96 208 96c-50.9 0-79.1 38.6-92.6 65.7c-7.2 14.4-11.9 28.5-14.7 38.7c-1.7 6-3.2 12.1-4.2 18.3c0 0 0 0 0 0c-2.9 17.4 8.9 33.9 26.3 36.8z" })] })));
};
export default IpsChartSineIcon;
//# sourceMappingURL=ips-chart-sine.js.map