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
export const IpsFloppyDisksIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-floppy-disks ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-floppy-disks" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M96 56c0-30.9 25.1-56 56-56L370.7 0c14.9 0 29.1 5.9 39.6 16.4l85.3 85.3c10.5 10.5 16.4 24.7 16.4 39.6L512 360c0 30.9-25.1 56-56 56l-304 0c-30.9 0-56-25.1-56-56L96 56zm96 8c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32L192 64zM368 288a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM48 120l0 256c0 48.6 39.4 88 88 88l256 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-256 0C60.9 512 0 451.1 0 376L0 120c0-13.3 10.7-24 24-24s24 10.7 24 24z" })] })));
};
export default IpsFloppyDisksIcon;
//# sourceMappingURL=ips-floppy-disks.js.map