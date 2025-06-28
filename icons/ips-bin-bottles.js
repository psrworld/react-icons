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
export const IpsBinBottlesIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-bin-bottles ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-bin-bottles" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M152 0l80 0c13.3 0 24 10.7 24 24l0 8c8.8 0 16 7.2 16 16s-7.2 16-16 16L128 64c-8.8 0-16-7.2-16-16s7.2-16 16-16l0-8c0-13.3 10.7-24 24-24zM32 192c0-53 43-96 96-96l128 0c24.9 0 47.6 9.5 64.6 25c1.1 1 2.2 2 3.2 3.1C341.3 141.5 352 165.5 352 192L32 192zm352 0c0-40.7-19-76.9-48.6-100.4c5.2-5.6 11.5-10.3 18.6-13.6l13.2-6.2c5.3-2.5 10.8-4.4 16.4-5.7l0-42.1c0-13.3 10.7-24 24-24l80 0c13.3 0 24 10.7 24 24l0 42.1c5.6 1.3 11.1 3.2 16.4 5.7L541.2 78c21 9.9 34.4 31 34.4 54.2c0 12.3-3.7 23.8-10.1 33.3c5 7.8 8.4 16.9 9.6 26.5L384 192zM0 256c0-17.7 14.3-32 32-32l576 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L583.8 457c-4.5 31.5-31.5 55-63.4 55l-401 0c-31.8 0-58.9-23.4-63.4-55L32 288c-17.7 0-32-14.3-32-32z" })] })));
};
export default IpsBinBottlesIcon;
//# sourceMappingURL=ips-bin-bottles.js.map