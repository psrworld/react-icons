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
export const IpsWindWarningIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-wind-warning ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-wind-warning" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M418 368c-38.7 67-111.1 112-194 112C100.3 480 0 379.7 0 256S100.3 32 224 32c118.3 0 215.2 91.8 223.4 208L384 240c-35.3 0-64 28.7-64 64s28.7 64 64 64l34 0zM248 152c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112zM224 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm248 48c0-17.7 14.3-32 32-32l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-152 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l152 0c53 0 96 43 96 96s-43 96-96 96l-32 0c-17.7 0-32-14.3-32-32zm72-192l-64.5 0c-1.4-22.2-5.6-43.7-12.3-64l76.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c53 0 96 43 96 96s-43 96-96 96z" })] })));
};
export default IpsWindWarningIcon;
//# sourceMappingURL=ips-wind-warning.js.map