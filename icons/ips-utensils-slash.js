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
export const IpsUtensilsSlashIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-utensils-slash ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-utensils-slash" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-86.8-68 0-49.1 0-112 0-208c0-17.7-14.3-32-32-32C496 0 384 32 384 176l0 99.7-77.6-60.8c8.6-13.6 13.6-29.7 13.6-47c0-6.4-.7-12.8-2.1-19.1L287.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S256 7.8 256 16l0 134.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L223.9 14.6C223.2 6.3 216.3 0 208 0s-15.2 6.3-15.9 14.6l-9.4 103.3L160 100.1 160 16c0-8.2-6.1-15-14.3-15.9s-15.6 4.5-17.4 12.4L116.5 66 38.8 5.1zM176 255.6L176 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-194.9L96.1 171.7c1.9 44.2 36.3 80 79.9 83.9z" })] })));
};
export default IpsUtensilsSlashIcon;
//# sourceMappingURL=ips-utensils-slash.js.map