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
export const IpsRouteInterstateIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-route-interstate ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-route-interstate" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M85.3 192l341 0c-.8 44.3-7.9 81.8-21.9 114.4c-23.4 54.1-68.5 99.1-149 138.5c-81.5-36.2-126.1-80.9-149-135.4c-14-33.3-20.6-72-21-117.4zM276.9 7.3c-12.8-7.8-29-7.8-41.8 0c-27.5 16.8-50.2 26-73.4 30c-23.3 4-49.2 3.2-83.7-3.2C55.9 30 34.4 45 31.1 67.7C16 170.4 15.9 259.5 47.3 334.2c32.1 76.4 94.6 132.5 193 173.9c10.4 4.4 22.3 4.1 32.5-.6c95.7-44.8 157.8-100.7 190.3-175.7c32-73.9 32.9-161.2 17.8-264.1C477.6 45.1 456.1 30 434 34.1c-34.4 6.3-60.3 7.2-83.7 3.2c-23.2-4-45.9-13.2-73.4-30z" })] })));
};
export default IpsRouteInterstateIcon;
//# sourceMappingURL=ips-route-interstate.js.map