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
export const IpsWrenchSimpleIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-wrench-simple ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-wrench-simple" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M132.7 164.7l48 48c6.2 6.2 16.4 6.2 22.6 0l48-48c3-3 4.7-7.1 4.7-11.3l0-135.8c0-11 10.9-18.7 20.8-13.8C340.3 35 384 100.4 384 176c0 71.1-38.6 133.1-96 166.3L288 464c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-121.7C38.6 309.1 0 247.1 0 176C0 100.4 43.7 35 107.2 3.7C117.1-1.2 128 6.5 128 17.6l0 135.8c0 4.2 1.7 8.3 4.7 11.3z" })] })));
};
export default IpsWrenchSimpleIcon;
//# sourceMappingURL=ips-wrench-simple.js.map