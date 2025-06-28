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
export const IpsCircle8Icon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-circle-8 ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-circle-8" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM264 128l-16 0c-39.8 0-72 32.2-72 72c0 15.7 5 30.1 13.5 42c-18 14.7-29.5 37-29.5 62c0 44.2 35.8 80 80 80l32 0c44.2 0 80-35.8 80-80c0-25-11.5-47.4-29.5-62c8.5-11.8 13.5-26.3 13.5-42c0-39.8-32.2-72-72-72zm-16 96c-13.2 0-24-10.8-24-24s10.7-24 24-24l16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24c0 0 0 0 0 0l-16 0s0 0 0 0zm16 48l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0 16 0z" })] })));
};
export default IpsCircle8Icon;
//# sourceMappingURL=ips-circle-8.js.map