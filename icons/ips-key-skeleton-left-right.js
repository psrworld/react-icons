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
export const IpsKeySkeletonLeftRightIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-key-skeleton-left-right ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-key-skeleton-left-right" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M576 128a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm64 0c0 70.7-57.3 128-128 128c-59.6 0-109.8-40.8-124-96l-68 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-32 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l196 0C402.2 40.8 452.4 0 512 0c70.7 0 128 57.3 128 128zM64 384a64 64 0 1 0 128 0A64 64 0 1 0 64 384zM0 384c0-70.7 57.3-128 128-128c59.6 0 109.8 40.8 124 96l68 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 32 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-196 0c-14.2 55.2-64.3 96-124 96C57.3 512 0 454.7 0 384z" })] })));
};
export default IpsKeySkeletonLeftRightIcon;
//# sourceMappingURL=ips-key-skeleton-left-right.js.map