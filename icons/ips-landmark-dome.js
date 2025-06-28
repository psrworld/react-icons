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
export const IpsLandmarkDomeIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-landmark-dome ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-landmark-dome" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M248 0l16 0c13.3 0 24 10.7 24 24l0 10.7C368.4 48.1 431.9 111.6 445.3 192l2.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L64 256c-17.7 0-32-14.3-32-32s14.3-32 32-32l2.7 0C80.1 111.6 143.6 48.1 224 34.7L224 24c0-13.3 10.7-24 24-24zM64 288l64 0 0 128 40 0 0-128 64 0 0 128 48 0 0-128 64 0 0 128 40 0 0-128 64 0 0 132.3c.6 .3 1.2 .7 1.8 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512L32 512c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1L64 288z" })] })));
};
export default IpsLandmarkDomeIcon;
//# sourceMappingURL=ips-landmark-dome.js.map