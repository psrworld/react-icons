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
export const IpsStarShootingIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-star-shooting ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-star-shooting" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M313 41L265 89c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L279 7c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM170.4 157.4c8.8-17.9 34.3-17.9 43.1 0l46.3 94 103.5 15.1c19.7 2.9 27.5 27 13.3 40.9l-74.9 73.2 17.7 103.3c3.4 19.6-17.2 34.6-34.8 25.3l-92.6-48.8L99.3 509.2c-17.6 9.3-38.2-5.7-34.8-25.3L82.2 380.6 7.2 307.4C-7 293.5 .9 269.3 20.5 266.5l103.5-15.1 46.3-94zM505 199c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0zM505 41L361 185c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L471 7c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" })] })));
};
export default IpsStarShootingIcon;
//# sourceMappingURL=ips-star-shooting.js.map