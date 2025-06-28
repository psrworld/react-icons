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
export const IpsLighthouseIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-lighthouse ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-lighthouse" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M33.5 1.9l112 48c12.2 5.2 17.8 19.3 12.6 31.5s-19.3 17.8-31.5 12.6l-112-48C2.4 40.8-3.3 26.7 1.9 14.6S21.3-3.3 33.5 1.9zm112 204.1l-112 48c-12.2 5.2-26.3-.4-31.5-12.6s.4-26.3 12.6-31.5l112-48c12.2-5.2 26.3 .4 31.5 12.6s-.4 26.3-12.6 31.5zM303.9 4.4c10-5.8 22.3-5.8 32.2 0l96 56c15.3 8.9 20.4 28.5 11.5 43.8C437.7 114.3 427 120 416 120l0 40c17.7 0 32 14.3 32 32c0 13.3-8.1 24.7-19.7 29.5L473.6 448l6.4 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.1 0L352 512l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-98.9 0L160 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l6.4 0 45.3-226.5C200.1 216.7 192 205.3 192 192c0-17.7 14.3-32 32-32c0 0 0 0 0 0l0-40c-11 0-21.7-5.7-27.6-15.9c-8.9-15.3-3.7-34.9 11.5-43.8l96-56zM352 87.7L320 69.1 288 87.7l0 72.3 64 0 0-72.3zM638.1 14.6c5.2 12.2-.4 26.3-12.6 31.5l-112 48c-12.2 5.2-26.3-.4-31.5-12.6s.4-26.3 12.6-31.5l112-48c12.2-5.2 26.3 .4 31.5 12.6zm-156.1 160c5.2-12.2 19.3-17.8 31.5-12.6l112 48c12.2 5.2 17.8 19.3 12.6 31.5s-19.3 17.8-31.5 12.6l-112-48c-12.2-5.2-17.8-19.3-12.6-31.5z" })] })));
};
export default IpsLighthouseIcon;
//# sourceMappingURL=ips-lighthouse.js.map