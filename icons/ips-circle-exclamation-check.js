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
export const IpsCircleExclamationCheckIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-circle-exclamation-check ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-circle-exclamation-check" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M506.5 203L480 229.5l-18.7-18.7c-25-25-65.5-25-90.5 0s-25 65.5 0 90.5l64 64c11.9 11.9 27.4 18.2 43 18.7c-44.3 76.5-127 128-221.8 128C114.6 512 0 397.4 0 256S114.6 0 256 0C379.2 0 482.1 87 506.5 203zM280 152c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112zM256 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM625 209L497 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L591 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" })] })));
};
export default IpsCircleExclamationCheckIcon;
//# sourceMappingURL=ips-circle-exclamation-check.js.map