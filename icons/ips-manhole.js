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
export const IpsManholeIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-manhole ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-manhole" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM281.4 115.4c5.8-7.5 14.5-14.7 23.6-11.8c64.4 20.7 111 81.1 111 152.4s-46.6 131.7-111 152.4c-9 2.9-17.8-4.3-23.6-11.8c-5.8-7.6-15.1-12.6-25.4-12.6s-19.6 4.9-25.4 12.6c-5.8 7.5-14.5 14.7-23.6 11.8C142.6 387.7 96 327.3 96 256s46.6-131.7 111-152.4c9-2.9 17.8 4.3 23.6 11.8c5.8 7.6 15.1 12.6 25.4 12.6s19.6-4.9 25.4-12.6zM192 176a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm0 64a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm0 64a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm80-112a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-32 64a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm32 64a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48-144a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm0 64a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm0 64a16 16 0 1 0 0 32 16 16 0 1 0 0-32z" })] })));
};
export default IpsManholeIcon;
//# sourceMappingURL=ips-manhole.js.map