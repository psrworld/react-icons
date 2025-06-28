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
export const IpsPlanePropIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-plane-prop ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-plane-prop" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M240 384l-8.3-66.4-110-11L113.8 370c-1 8-7.8 14-15.9 14l-35.8 0c-8.1 0-14.9-6-15.9-14L36 287.8c-1.3 .2-2.6 .2-4 .2c-17.7 0-32-14.3-32-32s14.3-32 32-32c1.3 0 2.7 .1 4 .2L46.2 142c1-8 7.8-14 15.9-14l35.8 0c8.1 0 14.9 6 15.9 14l7.9 63.4 110-11L240 128l-16 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l24 0 6.2-50c1-8 7.8-14 15.9-14l35.8 0c8.1 0 14.9 6 15.9 14L328 64l40 0 0-16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 32c8.8 0 16 7.2 16 16s-7.2 16-16 16l0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-16-32 0 8 64 138.3 0c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64L344 320l-8 64 32 0 0-16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 32c8.8 0 16 7.2 16 16s-7.2 16-16 16l0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-16-40 0-6.2 50c-1 8-7.8 14-15.9 14l-35.8 0c-8.1 0-14.9-6-15.9-14L248 448l-24 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0z" })] })));
};
export default IpsPlanePropIcon;
//# sourceMappingURL=ips-plane-prop.js.map