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
export const IpsFonduePotIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-fondue-pot ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-fondue-pot" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M319 39.8l-24 96c-2.9 11.5-11.6 20-22.2 23L264.5 192l-33 0 10.2-41c-7.9-7.7-11.7-19.3-8.8-30.8l24-96C261.2 7.1 278.6-3.3 295.8 1s27.6 21.7 23.3 38.8zm62.9 120.2L360.6 192l-38.5 0 33.2-49.8c-4.9-9.9-4.5-22.1 2.1-31.9l64-96C431.2-.5 451-4.4 465.8 5.4s18.7 29.7 8.9 44.4l-64 96c-6.6 9.9-17.7 14.9-28.7 14.2zM32 224l32 0 0 16 0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32c0-8.8 7.2-16 16-16s16 7.2 16 16s7.2 16 16 16s16-7.2 16-16l0-32 0-16 224 0 64 0 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 32c0 52.3-25.1 98.8-64 128l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-3.2c-10.3 2.1-21 3.2-32 3.2l-128 0c-11 0-21.7-1.1-32-3.2l0 3.2c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32C25.1 418.8 0 372.3 0 320l0-64c0-17.7 14.3-32 32-32z" })] })));
};
export default IpsFonduePotIcon;
//# sourceMappingURL=ips-fondue-pot.js.map