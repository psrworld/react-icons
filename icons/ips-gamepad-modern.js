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
export const IpsGamepadModernIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-gamepad-modern ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-gamepad-modern" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 369.4l0 2.8C0 431.7 48.3 480 107.8 480c49.5 0 92.6-33.7 104.6-81.7L216 384l208 0 3.6 14.3c12 48 55.1 81.7 104.6 81.7C591.7 480 640 431.7 640 372.2l0-2.8c0-6.3-.5-12.5-1.6-18.7L605.7 159.8c-8.6-50.2-40.9-93.2-90.3-105.5C469.5 42.9 403.8 32 320 32s-149.5 10.9-195.3 22.3C75.2 66.6 42.9 109.6 34.3 159.8L1.6 350.7C.5 356.9 0 363.1 0 369.4zM432 232a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm24-56a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zm-240-8l0 32 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-32c0-13.3 10.7-24 24-24s24 10.7 24 24z" })] })));
};
export default IpsGamepadModernIcon;
//# sourceMappingURL=ips-gamepad-modern.js.map