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
export const IpsLaptopSlashIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-laptop-slash ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-laptop-slash" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-14-10.9c14.3-13.9 23.2-33.4 23.2-55c0-10.6-8.6-19.2-19.2-19.2l-98.6 0L154.8 96 512 96l0 256 64 0 0-256c0-35.3-28.7-64-64-64L128 32c-14.4 0-27.8 4.8-38.5 12.9L38.8 5.1zM128 197L64 146.6 64 352l64 0 0-155zM487.2 480L365.3 384 19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480l410.4 0z" })] })));
};
export default IpsLaptopSlashIcon;
//# sourceMappingURL=ips-laptop-slash.js.map