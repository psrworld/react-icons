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
export const IpsStretcherIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-stretcher ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-stretcher" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M83 79.2C64.9 59.8 34.5 58.9 15.2 77S-5.1 125.5 13 144.8L123.5 262.7c15.1 16.1 36.3 25.3 58.4 25.3L592 288c26.5 0 48-21.5 48-48s-21.5-48-48-48l-403.2 0L83 79.2zM240 448a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm80 0c0-5.3-.7-10.5-1.9-15.5L368 396.2l49.9 36.3c-1.2 5-1.9 10.2-1.9 15.5c0 35.3 28.7 64 64 64s64-28.7 64-64s-28.7-64-64-64c-12.4 0-24 3.5-33.9 9.7l-37.3-27.1 64-46.5-81.6 0L368 336.9 344.8 320l-81.6 0 64 46.5-37.3 27.1c-9.8-6.1-21.4-9.7-33.9-9.7c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64zm160-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" })] })));
};
export default IpsStretcherIcon;
//# sourceMappingURL=ips-stretcher.js.map