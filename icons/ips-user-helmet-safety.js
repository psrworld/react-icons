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
export const IpsUserHelmetSafetyIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-user-helmet-safety ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-user-helmet-safety" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M216 0c-13.3 0-24 10.7-24 24l0 56L163.6 23.1C125.6 43.5 99 82.6 96.2 128l-.2 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l256 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-.2 0C349 82.6 322.4 43.5 284.4 23.1L256 80l0-56c0-13.3-10.7-24-24-24L216 0zm8 320c65.3 0 119.1-48.9 127-112L97 208c7.9 63.1 61.7 112 127 112zm-89.6 32C60.2 352 0 412.2 0 486.4C0 500.5 11.5 512 25.6 512l396.8 0c14.1 0 25.6-11.5 25.6-25.6C448 412.2 387.8 352 313.6 352l-179.2 0z" })] })));
};
export default IpsUserHelmetSafetyIcon;
//# sourceMappingURL=ips-user-helmet-safety.js.map