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
export const IpsFilesMedicalIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-files-medical ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-files-medical" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M160 0L320 0l0 96c0 17.7 14.3 32 32 32l96 0 0 224c0 35.3-28.7 64-64 64l-224 0c-35.3 0-64-28.7-64-64L96 64c0-35.3 28.7-64 64-64zM416 64l32 32-45.3 0L384 96l-32 0 0-32 0-18.7L352 0l32 32 32 32zM24 96c13.3 0 24 10.7 24 24l0 256c0 48.6 39.4 88 88 88l192 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-192 0C60.9 512 0 451.1 0 376L0 120c0-13.3 10.7-24 24-24zm216 80l0 48-48 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-48 0 0-48c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z" })] })));
};
export default IpsFilesMedicalIcon;
//# sourceMappingURL=ips-files-medical.js.map