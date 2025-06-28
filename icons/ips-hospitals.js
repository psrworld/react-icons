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
export const IpsHospitalsIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-hospitals ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-hospitals" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M304 0c-26.5 0-48 21.5-48 48l0 16c35.3 0 64 28.7 64 64l0 352c0 11.7-3.1 22.6-8.6 32L528 512c26.5 0 48-21.5 48-48l0-80-112 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l112 0 0-64-112 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l112 0 0-208c0-26.5-21.5-48-48-48L304 0zM408 96c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 24 24 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-24 0 0 24c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-24-24 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16l24 0 0-24zM0 144L0 384l144 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L0 416l0 48c0 26.5 21.5 48 48 48l192 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L48 96C21.5 96 0 117.5 0 144zm120 48c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 24 24 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-24 0 0 24c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-24-24 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16l24 0 0-24z" })] })));
};
export default IpsHospitalsIcon;
//# sourceMappingURL=ips-hospitals.js.map