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
export const IpsAngleIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-angle ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-angle" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M252.6 78.3c7.9-15.8 1.5-35-14.3-42.9s-35-1.5-42.9 14.3l-192 384c-5 9.9-4.4 21.7 1.4 31.1S20.9 480 32 480l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L83.8 416 252.6 78.3zm-12.2 96l-21.9 43.8c21.4 17.4 40.4 37.7 56.2 60.4l40.8-25.3c-20.7-30.1-46.1-56.7-75.1-78.9zM321.1 384l49 0c-7-37-19.8-71.9-37.6-103.7l-40.8 25.3c13.3 24.2 23.3 50.5 29.5 78.3z" })] })));
};
export default IpsAngleIcon;
//# sourceMappingURL=ips-angle.js.map