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
export const IpsEclipseIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-eclipse ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-eclipse" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9l9.6 52.2c-34.2 15-63.7 38.9-85.4 68.8c-12.4-4-25.6-6.2-39.4-6.2c-70.7 0-128 57.3-128 128s57.3 128 128 128c13.7 0 27-2.2 39.4-6.2c21.7 29.9 51.1 53.9 85.4 68.8l-9.6 52.2c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM256 160c7.6 0 15 .9 22.1 2.6C264 190.7 256 222.4 256 256s8 65.3 22.1 93.4c-7.1 1.7-14.5 2.6-22.1 2.6c-53 0-96-43-96-96s43-96 96-96zM464 80a176 176 0 1 1 0 352 176 176 0 1 1 0-352z" })] })));
};
export default IpsEclipseIcon;
//# sourceMappingURL=ips-eclipse.js.map