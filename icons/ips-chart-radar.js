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
export const IpsChartRadarIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-chart-radar ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-chart-radar" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M72.5 252c-1.4 2.5-1.4 5.5 0 8l88.3 152.9c1.4 2.5 4.1 4 6.9 4l176.6 0c2.9 0 5.5-1.5 6.9-4L439.5 260l48.7 28.1L439.5 260c1.4-2.5 1.4-5.5 0-8L351.2 99.1c-1.4-2.5-4.1-4-6.9-4l-176.6 0c-2.9 0-5.5 1.5-6.9 4L72.5 252zM17.1 292c-12.9-22.3-12.9-49.7 0-72L105.4 67.1c12.9-22.3 36.6-36 62.4-36l176.6 0c25.7 0 49.5 13.7 62.4 36L494.9 220c12.9 22.3 12.9 49.7 0 72L406.6 444.9c-12.9 22.3-36.6 36-62.4 36l-176.6 0c-25.7 0-49.5-13.7-62.4-36L17.1 292zM290.2 180.8l40.2 100.6c17.1 4.6 29.6 20.1 29.6 38.6c0 22.1-17.9 40-40 40c-15.9 0-29.7-9.3-36.1-22.7l-97.2-19.4c-7.1 6.3-16.4 10.2-26.7 10.2c-22.1 0-40-17.9-40-40s17.9-40 40-40l57.6-76.8c-1-3.6-1.6-7.3-1.6-11.2c0-22.1 17.9-40 40-40s40 17.9 40 40c0 7.6-2.1 14.7-5.8 20.8zM202 271.9l79.2 15.8-31.7-79.2L202 271.9z" })] })));
};
export default IpsChartRadarIcon;
//# sourceMappingURL=ips-chart-radar.js.map