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
export const IpsArrowProgressIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-arrow-progress ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-arrow-progress" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M448 128A64 64 0 1 0 448 0a64 64 0 1 0 0 128zM128 32C57.3 32 0 89.3 0 160s57.3 128 128 128l256 0c35.3 0 64 28.7 64 64c0 27.9-17.9 51.7-42.8 60.4c-11.5-17.1-31-28.4-53.2-28.4c-35.3 0-64 28.7-64 64s28.7 64 64 64c24.7 0 46.1-14 56.8-34.4C467.6 466.1 512 414.2 512 352c0-70.7-57.3-128-128-128l-256 0c-35.3 0-64-28.7-64-64s28.7-64 64-64l128 0 0 14.1c0 9.9 8 17.9 17.9 17.9c4 0 7.8-1.3 11-3.8l60.8-47.3c4-3.1 6.3-7.9 6.3-12.9s-2.3-9.8-6.3-12.9L284.8 3.8c-3.1-2.4-7-3.8-11-3.8C264 0 256 8 256 17.9L256 32 128 32zm-8.6 384c-11.1-19.1-31.7-32-55.4-32c-35.3 0-64 28.7-64 64s28.7 64 64 64c23.7 0 44.4-12.9 55.4-32l40.6 0 0 14.1c0 9.9 8 17.9 17.9 17.9c4 0 7.8-1.3 11-3.8l60.8-47.3c4-3.1 6.3-7.9 6.3-12.9s-2.3-9.8-6.3-12.9l-60.8-47.3c-3.1-2.4-7-3.8-11-3.8c-9.9 0-17.9 8-17.9 17.9l0 14.1-40.6 0z" })] })));
};
export default IpsArrowProgressIcon;
//# sourceMappingURL=ips-arrow-progress.js.map