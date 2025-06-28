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
export const IpsShredderIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-shredder ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-shredder" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 64C64 28.7 92.7 0 128 0L354.7 0c17 0 33.3 6.7 45.3 18.7L429.3 48c12 12 18.7 28.3 18.7 45.3l0 98.7c35.3 0 64 28.7 64 64l0 96c0 17.7-14.3 32-32 32L32 384c-17.7 0-32-14.3-32-32l0-96c0-35.3 28.7-64 64-64L64 64zM384 93.3L354.7 64 128 64l0 128 256 0 0-98.7zM432 296a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM40 416l48 0 0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-72zm96 0l48 0 0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-72zm96 0l48 0 0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-72zm96 0l48 0 0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-72zm96 0l48 0 0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-72z" })] })));
};
export default IpsShredderIcon;
//# sourceMappingURL=ips-shredder.js.map