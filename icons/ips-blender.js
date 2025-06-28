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
export const IpsBlenderIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-blender ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-blender" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 64C0 28.7 28.7 0 64 0l64 0 32 0L470.1 0c21.1 0 36.4 20.1 30.9 40.4L494.5 64 336 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l149.8 0-17.5 64L336 160c-8.8 0-16 7.2-16 16s7.2 16 16 16l123.6 0-17.5 64L336 256c-8.8 0-16 7.2-16 16s7.2 16 16 16l97.5 0L416 352l-256 0-8.7-96L64 256c-35.3 0-64-28.7-64-64L0 64zM145.5 192L133.8 64 64 64l0 128 81.5 0zM144 384l288 0c26.5 0 48 21.5 48 48l0 32c0 26.5-21.5 48-48 48l-288 0c-26.5 0-48-21.5-48-48l0-32c0-26.5 21.5-48 48-48zm144 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" })] })));
};
export default IpsBlenderIcon;
//# sourceMappingURL=ips-blender.js.map