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
export const IpsFilePrescriptionIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-file-prescription ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-file-prescription" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM104 196l72 0c33.1 0 60 26.9 60 60c0 25.5-15.9 47.2-38.3 55.9l43 40.3 33.8-31c8.1-7.5 20.8-6.9 28.3 1.2s6.9 20.8-1.2 28.3L270 379.7l31.7 29.7c8.1 7.6 8.5 20.2 .9 28.3s-20.2 8.5-28.3 .9l-33.9-31.8-34.9 32c-8.1 7.5-20.8 6.9-28.3-1.2s-6.9-20.8 1.2-28.3l32.6-29.9-64.8-60.8c-.9-.8-1.6-1.7-2.3-2.6l-20 0 0 44c0 11-9 20-20 20s-20-9-20-20l0-64 0-80c0-11 9-20 20-20zm72 80c11 0 20-9 20-20s-9-20-20-20l-52 0 0 40 52 0z" })] })));
};
export default IpsFilePrescriptionIcon;
//# sourceMappingURL=ips-file-prescription.js.map