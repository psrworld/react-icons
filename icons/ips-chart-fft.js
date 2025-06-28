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
export const IpsChartFftIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-chart-fft ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-chart-fft" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zM284.6 81.7c-5.7-11.5-17.8-18.4-30.6-17.6s-23.9 9.1-28.2 21.2L153.4 288 128 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l48 0c13.5 0 25.6-8.5 30.1-21.2l54.8-153.4 30.5 60.9c5.4 10.8 16.5 17.7 28.6 17.7l60.2 0 39.2 78.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-48-96C423.2 198.8 412.1 192 400 192l-60.2 0L284.6 81.7z" })] })));
};
export default IpsChartFftIcon;
//# sourceMappingURL=ips-chart-fft.js.map