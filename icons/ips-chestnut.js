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
export const IpsChestnutIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-chestnut ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-chestnut" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M224 32c5.3 0 10.3 2.7 13.3 7.1c2.9 4.3 7.9 9.7 15.5 16.6c7.5 6.8 16.7 14.3 27.2 22.8l3.1 2.5s0 0 0 0c20.3 16.4 44.7 36.1 68.2 59.6C400.8 190.2 448 258 448 352L0 352c0-94 47.2-161.8 96.7-211.3c23.5-23.5 47.9-43.2 68.2-59.6l3.1-2.5c10.6-8.5 19.7-16 27.2-22.8c7.6-6.9 12.7-12.3 15.5-16.6c3-4.5 8-7.1 13.3-7.1zM4 384L444 384c-14.2 55.2-64.3 96-124 96l-192 0C68.4 480 18.2 439.2 4 384z" })] })));
};
export default IpsChestnutIcon;
//# sourceMappingURL=ips-chestnut.js.map