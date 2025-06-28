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
export const IpsCircleBookOpenIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-circle-book-open ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-circle-book-open" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 336c-23.1 0-41 11.1-46.3 14.8c-1.1 .8-2.4 1.2-3.7 1.2c-3.3 0-5.9-2.7-5.9-5.9l0-160.7c0-5.8 3.1-11.1 8.3-13.5c10.4-4.7 29.1-11.9 47.7-11.9s37.2 7.1 47.7 11.9c5.2 2.4 8.3 7.7 8.3 13.5l0 160.7c0 3.3-2.7 5.9-5.9 5.9c-1.3 0-2.6-.4-3.7-1.2C225 347.1 207.1 336 184 336zm144 0c-23.1 0-41 11.1-46.3 14.8c-1.1 .8-2.4 1.2-3.7 1.2c-3.3 0-5.9-2.7-5.9-5.9l0-160.7c0-5.8 3.1-11.1 8.3-13.5c10.4-4.7 29.1-11.9 47.7-11.9s37.2 7.1 47.7 11.9c5.2 2.4 8.3 7.7 8.3 13.5l0 160.7c0 3.3-2.7 5.9-5.9 5.9c-1.3 0-2.6-.4-3.7-1.2C369 347.1 351.1 336 328 336z" })] })));
};
export default IpsCircleBookOpenIcon;
//# sourceMappingURL=ips-circle-book-open.js.map