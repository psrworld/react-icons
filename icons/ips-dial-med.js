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
export const IpsDialMedIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-dial-med ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-dial-med" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M288 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM128 287.2C128 207 187 140.6 264 129l0 158.2c0 13.3 10.7 24 24 24s24-10.7 24-24L312 129c77 11.6 136 78 136 158.2c0 88.4-71.6 160-160 160s-160-71.6-160-160zm384 .8a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM32 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM64 96a32 32 0 1 1 64 0A32 32 0 1 1 64 96zM480 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM64 480a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm416-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" })] })));
};
export default IpsDialMedIcon;
//# sourceMappingURL=ips-dial-med.js.map