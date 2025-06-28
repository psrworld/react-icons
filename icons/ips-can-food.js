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
export const IpsCanFoodIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-can-food ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-can-food" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M270.3 304.5c12.1-2.5 23.4-5.5 33.7-9L304 426c-2.8 1.6-6.6 3.6-11.8 5.7C269.8 440.9 234.4 448 192 448s-77.8-7.1-100.2-16.3c-5.2-2.1-9-4.1-11.8-5.7l0-130.4c10.3 3.5 21.6 6.5 33.7 9c7.6 36.3 39.8 63.5 78.3 63.5s70.7-27.2 78.3-63.5zm-100.1-40a32 32 0 1 1 43.5 46.9 32 32 0 1 1 -43.5-46.9zM16 72l0 168 0 200c0 39.8 78.8 72 176 72s176-32.2 176-72l0-200 0-168c0-39.8-78.8-72-176-72S16 32.2 16 72zm288 0c0 13.3-50.1 24-112 24S80 85.3 80 72s50.1-24 112-24s112 10.7 112 24z" })] })));
};
export default IpsCanFoodIcon;
//# sourceMappingURL=ips-can-food.js.map