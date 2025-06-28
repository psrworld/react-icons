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
export const IpsChartCandlestickIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-chart-candlestick ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-chart-candlestick" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zM320 48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l0-48zm64 176l0 64c0 17.7 14.3 32 32 32l0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l0-48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48c-17.7 0-32 14.3-32 32zM160 128c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l0-48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48z" })] })));
};
export default IpsChartCandlestickIcon;
//# sourceMappingURL=ips-chart-candlestick.js.map