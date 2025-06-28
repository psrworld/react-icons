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
export const IpsDaggerIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-dagger ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-dagger" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96L48 128c-26.5 0-48 21.5-48 48s21.5 48 48 48c20.9 0 38.7-13.4 45.3-32l98.7 0 98.7 0c6.6 18.6 24.4 32 45.3 32c26.5 0 48-21.5 48-48s-21.5-48-48-48l-112 0 0-96zM128 224l0 24 0 166.8c0 10.5 2.9 20.8 8.5 29.7l35.1 56.2c4.4 7 12.1 11.3 20.4 11.3s16-4.3 20.4-11.3l35.1-56.2c5.6-8.9 8.5-19.2 8.5-29.7L256 248l0-24-24 0-80 0-24 0z" })] })));
};
export default IpsDaggerIcon;
//# sourceMappingURL=ips-dagger.js.map