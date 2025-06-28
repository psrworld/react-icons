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
export const IpsFaceMeltingIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-face-melting ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-face-melting" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M571.4 304.8c-4.5 23.2 11.8 47.2 35.4 47.2l1.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l12.9 0c36.8 0 58.4-50.7 42.9-84.1C72.5 331.1 64 294.5 64 256C64 114.6 178.6 0 320 0S576 114.6 576 256c0 16.7-1.6 33-4.6 48.8zM247.2 219.9a32 32 0 1 0 16.6-61.8 32 32 0 1 0 -16.6 61.8zM441 238.7a32 32 0 1 0 -61.8-16.6A32 32 0 1 0 441 238.7zM213.2 299.4c-3.9-7.9-13.4-11.3-21.4-7.4s-11.3 13.4-7.4 21.4c14.8 30.5 45.1 67.5 98.3 81.7s97.9-2.6 126-21.7c7.3-5 9.2-14.9 4.3-22.2s-14.9-9.2-22.2-4.3c-22.7 15.4-57.9 28.5-99.8 17.2s-65.8-40.2-77.8-64.8z" })] })));
};
export default IpsFaceMeltingIcon;
//# sourceMappingURL=ips-face-melting.js.map