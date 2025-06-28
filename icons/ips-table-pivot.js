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
export const IpsTablePivotIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-table-pivot ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-table-pivot" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 96C0 60.7 28.7 32 64 32l64 0 0 128L0 160 0 96zm448 64l-288 0 0-128 288 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 192l128 0 0 224 320 0 0-256zm-33.2 86.1c-2.5 6-8.3 9.9-14.8 9.9l-16 0 0 48c0 26.5-21.5 48-48 48l-48 0 0 16c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5l-32-32c-6.2-6.2-6.2-16.4 0-22.6l32-32c4.6-4.6 11.5-5.9 17.4-3.5s9.9 8.3 9.9 14.8l0 16 48 0c8.8 0 16-7.2 16-16l0-48-16 0c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4l32-32c6.2-6.2 16.4-6.2 22.6 0l32 32c4.6 4.6 5.9 11.5 3.5 17.4z" })] })));
};
export default IpsTablePivotIcon;
//# sourceMappingURL=ips-table-pivot.js.map