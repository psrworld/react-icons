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
export const IpsCitrusIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-citrus ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-citrus" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M304 128l80 0c53 0 96-43 96-96l0-16c0-8.8-7.2-16-16-16L384 0c-53 0-96 43-96 96l0 16c0 8.8 7.2 16 16 16zM256 96c0-23.1 6.1-44.7 16.8-63.4c-5.5-.4-11.1-.6-16.8-.6C123.5 32 16 139.5 16 272s107.5 240 240 240s240-107.5 240-240c0-49.5-15-95.5-40.7-133.7C435 152 410.4 160 384 160l-80 0c-26.5 0-48-21.5-48-48l0-16z" })] })));
};
export default IpsCitrusIcon;
//# sourceMappingURL=ips-citrus.js.map