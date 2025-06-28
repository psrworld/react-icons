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
export const IpsMaskFaceIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-mask-face ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-mask-face" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M320 64c-27.2 0-53.8 8-76.4 23.1l-37.1 24.8c-15.8 10.5-34.3 16.1-53.3 16.1l-9.2 0-16 0-72 0c-30.9 0-56 25.1-56 56l0 85c0 55.1 37.5 103.1 90.9 116.4l108 27C233.8 435 275.4 448 320 448s86.2-13 121.1-35.5l108-27C602.5 372.1 640 324.1 640 269l0-85c0-30.9-25.1-56-56-56l-72 0-16 0-9.2 0c-19 0-37.5-5.6-53.3-16.1L396.4 87.1C373.8 72 347.2 64 320 64zM132.3 346.3l-29.8-7.4C70.5 330.9 48 302.1 48 269l0-85c0-4.4 3.6-8 8-8l40 0 0 48c0 45.1 13.4 87.2 36.3 122.3zm405.1-7.4l-29.8 7.4c23-35.2 36.3-77.2 36.3-122.3l0-48 40 0c4.4 0 8 3.6 8 8l0 85c0 33-22.5 61.8-54.5 69.9zM192 208c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16zm16 48l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm16 80c0-8.8 7.2-16 16-16l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16z" })] })));
};
export default IpsMaskFaceIcon;
//# sourceMappingURL=ips-mask-face.js.map