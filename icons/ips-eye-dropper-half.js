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
export const IpsEyeDropperHalfIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-eye-dropper-half ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-eye-dropper-half" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M240.1 130.8L341.6 29.2c39-39 102.2-39 141.1 0s39 102.2 0 141.1L381.2 271.9l9.4 9.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l9.4 9.4zm-63.9 71.8l45.3 45.3L149.3 320l85.5 0 29.4-29.4 45.3 45.3L188.7 456.6c-15 15-35.4 23.4-56.6 23.4l-42.4 0L49.8 506.6c-12.7 8.5-29.6 6.8-40.4-4s-12.5-27.7-4-40.4L32 422.3l0-42.4c0-21.2 8.4-41.6 23.4-56.6L176.1 202.6z" })] })));
};
export default IpsEyeDropperHalfIcon;
//# sourceMappingURL=ips-eye-dropper-half.js.map