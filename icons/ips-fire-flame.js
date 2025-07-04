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
export const IpsFireFlameIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-fire-flame ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-fire-flame" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M372.5 256.5l-.7-1.9C337.8 160.8 282 76.5 209.1 8.5l-3.3-3C202.1 2 197.1 0 192 0s-10.1 2-13.8 5.5l-3.3 3C102 76.5 46.2 160.8 12.2 254.6l-.7 1.9C3.9 277.3 0 299.4 0 321.6C0 426.7 86.8 512 192 512s192-85.3 192-190.4c0-22.2-3.9-44.2-11.5-65.1zM188.8 148.3c2-2.7 5.2-4.3 8.5-4.3c5.9 0 10.7 4.8 10.7 10.7l0 11.4c0 8.9 3.6 17.4 9.9 23.6l51.5 50.7C291.5 262.2 304 292 304 323c0 60.2-48.8 109-109 109l-3 0c-61.9 0-112-50.1-112-112l0-8.2c0-21.2 7.8-41.6 21.8-57.4l6.9-7.8c2.1-2.4 5.1-3.7 8.3-3.7c6.1 0 11 4.9 11 11l0 44c0 24.3 19.8 44 44.1 44c24.2 0 43.9-19.6 43.9-43.8c0-11.6-4.6-22.8-12.8-31l-13.2-13.2c-14-14-21.9-33.1-21.9-53c0-16.2 5.3-32 15-44.9l5.8-7.8z" })] })));
};
export default IpsFireFlameIcon;
//# sourceMappingURL=ips-fire-flame.js.map