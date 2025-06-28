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
export const IpsPoliceBoxIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-police-box ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-police-box" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M192 0c8.8 0 16 7.2 16 16l0 16 80 0c17.7 0 32 14.3 32 32c17.7 0 32 14.3 32 32l0 368 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 512c-13.3 0-24-10.7-24-24s10.7-24 24-24l8 0L32 96c0-17.7 14.3-32 32-32c0-17.7 14.3-32 32-32l80 0 0-16c0-8.8 7.2-16 16-16zM96 136l0 24 32 0 0-32-24 0c-4.4 0-8 3.6-8 8zm0 40l0 24c0 4.4 3.6 8 8 8l24 0 0-32-32 0zm72-48l-24 0 0 32 32 0 0-24c0-4.4-3.6-8-8-8zm-24 48l0 32 24 0c4.4 0 8-3.6 8-8l0-24-32 0zm72-48c-4.4 0-8 3.6-8 8l0 24 32 0 0-32-24 0zm24 48l-32 0 0 24c0 4.4 3.6 8 8 8l24 0 0-32zm16-48l0 32 32 0 0-24c0-4.4-3.6-8-8-8l-24 0zm32 48l-32 0 0 32 24 0c4.4 0 8-3.6 8-8l0-24zM96 256l0 48c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16l0-48c0-8.8-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16z" })] })));
};
export default IpsPoliceBoxIcon;
//# sourceMappingURL=ips-police-box.js.map