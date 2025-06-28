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
export const IpsCircleLocationArrowIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-circle-location-arrow ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-circle-location-arrow" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM358.2 182.7l-84 196c-3.5 8.1-11.4 13.3-20.2 13.3c-1.4 0-2.9-.1-4.4-.4C239.4 389.5 232 380.4 232 370l0-90-90 0c-10.4 0-19.5-7.4-21.5-17.6c-2.1-10.2 3.3-20.5 12.9-24.6l196-84c8.5-3.5 18-1.7 24.2 4.7c6.4 6.3 8.2 15.9 4.7 24.2z" })] })));
};
export default IpsCircleLocationArrowIcon;
//# sourceMappingURL=ips-circle-location-arrow.js.map