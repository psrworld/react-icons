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
export const IpsTrashSlashIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-trash-slash ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-trash-slash" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L497.2 364.4 512 128l-316.4 0L154.8 96 512 96c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C403.4 6.8 392.3 0 380.2 0L259.8 0c-12.1 0-23.2 6.8-28.6 17.7L224 32l-96 0c-13.4 0-24.8 8.2-29.6 19.8L38.8 5.1zM488 480.5L132.5 200.4 149.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c20.6 0 38.3-13 45.1-31.5z" })] })));
};
export default IpsTrashSlashIcon;
//# sourceMappingURL=ips-trash-slash.js.map