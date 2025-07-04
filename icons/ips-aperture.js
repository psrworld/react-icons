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
export const IpsApertureIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-aperture ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-aperture" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M256 0c4 0 7.9 .1 11.9 .3c11.3 .5 17.5 12.9 11.8 22.8L177.5 200c-6.2 10.7-21.6 10.7-27.7 0L82.8 84.1c-3.6-6.3-2.6-14.3 2.9-19.2C130.9 24.5 190.6 0 256 0zM0 256c0-50.9 14.9-98.3 40.5-138.2c6.1-9.5 19.9-8.6 25.6 1.2L168.2 296c6.2 10.7-1.5 24-13.9 24L20.5 320c-7.3 0-13.7-4.9-15.2-12.1C1.8 291.2 0 273.8 0 256zM193.7 492c-3.6 6.3-11.1 9.4-18 7.1C111.8 478 59 432.5 28.5 373.6C23.3 363.5 31 352 42.3 352l204.4 0c12.3 0 20 13.3 13.9 24l-67 116zM256 512c-4 0-7.9-.1-11.9-.3c-11.3-.5-17.5-12.9-11.8-22.8L334.5 312c6.2-10.7 21.6-10.7 27.7 0l66.9 115.9c3.6 6.3 2.6 14.3-2.9 19.2C381.1 487.5 321.4 512 256 512zM512 256c0 50.9-14.9 98.3-40.5 138.2c-6.1 9.5-19.9 8.6-25.6-1.2L343.8 216c-6.2-10.7 1.5-24 13.9-24l133.9 0c7.3 0 13.7 4.9 15.2 12.1c3.5 16.8 5.3 34.1 5.3 51.9zM318.3 20c3.6-6.3 11.1-9.4 18-7.1C400.2 34 453 79.5 483.5 138.4c5.2 10.1-2.5 21.6-13.8 21.6l-204.4 0c-12.3 0-20-13.3-13.9-24l67-116z" })] })));
};
export default IpsApertureIcon;
//# sourceMappingURL=ips-aperture.js.map