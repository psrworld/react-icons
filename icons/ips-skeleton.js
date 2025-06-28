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
export const IpsSkeletonIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-skeleton ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-skeleton" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M256 0c17.7 0 32 14.3 32 32l0 32 128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0 0 32 192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0 0 32 96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0 0 64c0 .8 0 1.6-.1 2.3l67.6-29c8.3-3.5 17.2-5.4 26.1-5.4c36.7 0 66.4 29.7 66.4 66.4l0 1.5c0 18-7.2 35.3-19.9 48l-25.8 25.8c-11.7 11.7-27.6 18.3-44.1 18.3l-204.3 0c-16.6 0-32.4-6.6-44.1-18.3L83.9 467.9c-12.7-12.7-19.9-30-19.9-48l0-1.5c0-36.7 29.7-66.4 66.4-66.4c9 0 17.9 1.8 26.1 5.4l67.6 29c-.1-.8-.1-1.5-.1-2.3l0-64-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0 0-32L32 224c-17.7 0-32-14.3-32-32s14.3-32 32-32l192 0 0-32L96 128c-17.7 0-32-14.3-32-32s14.3-32 32-32l128 0 0-32c0-17.7 14.3-32 32-32zM184 440a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm192 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" })] })));
};
export default IpsSkeletonIcon;
//# sourceMappingURL=ips-skeleton.js.map