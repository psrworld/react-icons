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
export const IpsCircle3Icon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-circle-3 ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-circle-3" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 128l128 0c9.9 0 18.8 6.1 22.4 15.3s1.1 19.7-6.2 26.4l-50.8 46.5c41.9 4.8 74.6 40.4 74.6 83.6c0 46.5-37.7 84.2-84.2 84.2L240 384c-30.1 0-58.1-15.6-73.9-41.2l-2.6-4.2c-7-11.3-3.5-26.1 7.8-33s26.1-3.5 33 7.8l2.6 4.2c7.1 11.5 19.6 18.4 33 18.4l27.8 0c20 0 36.2-16.2 36.2-36.2c0-20.1-16.3-36.3-36.4-36.2l-51.5 .3c-9.9 .1-18.9-6-22.5-15.2s-1.2-19.8 6.1-26.5L250.3 176 184 176c-13.3 0-24-10.7-24-24s10.7-24 24-24z" })] })));
};
export default IpsCircle3Icon;
//# sourceMappingURL=ips-circle-3.js.map