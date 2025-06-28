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
export const IpsChartLineUpDownIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-chart-line-up-down ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-chart-line-up-down" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm313.4 57.4L288 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-80 80c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L208 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l112-112 18.7 18.7c4.2 4.2 10 6.6 16 6.6c12.5 0 22.6-10.1 22.6-22.6l0-73.2 0-.3L480 80c0-8.8-7.2-16-16-16l-89.4 0C362.1 64 352 74.1 352 86.6c0 6 2.4 11.8 6.6 16l18.7 18.7zm64 141.3l-18.7 18.7-34.7-34.7-45.3 45.3 34.7 34.7-18.7 18.7c-4.2 4.2-6.6 10-6.6 16c0 12.5 10.1 22.6 22.6 22.6l89.4 0c8.8 0 16-7.2 16-16l0-89.4c0-12.5-10.1-22.6-22.6-22.6c-6 0-11.8 2.4-16 6.6z" })] })));
};
export default IpsChartLineUpDownIcon;
//# sourceMappingURL=ips-chart-line-up-down.js.map