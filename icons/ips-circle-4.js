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
export const IpsCircle4Icon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-circle-4 ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-circle-4" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM223.6 129.2c-12.6-4.2-26.2 2.6-30.4 15.2l-48 144c-2.4 7.3-1.2 15.4 3.3 21.6s11.8 10 19.5 10l104 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 8 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 56-70.7 0 37.5-112.4c4.2-12.6-2.6-26.2-15.2-30.4z" })] })));
};
export default IpsCircle4Icon;
//# sourceMappingURL=ips-circle-4.js.map