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
export const IpsBanParkingIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-ban-parking ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-ban-parking" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M412.5 367.2L342.3 297c20.6-17.6 33.7-43.8 33.7-73c0-53-43-96-96-96l-72 0c-9.7 0-18.6 3.5-25.5 9.2L144.8 99.5C176.1 77.1 214.5 64 256 64c106 0 192 86 192 192c0 41.5-13.1 79.9-35.5 111.2zm-45.3 45.3C335.9 434.9 297.5 448 256 448C150 448 64 362 64 256c0-41.5 13.1-79.9 35.5-111.2L367.2 412.5zM296.6 251.4L237.3 192l42.7 0c17.7 0 32 14.3 32 32c0 11.6-6.2 21.7-15.4 27.4zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 325.3l-64-64 0 26.7 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-26.7z" })] })));
};
export default IpsBanParkingIcon;
//# sourceMappingURL=ips-ban-parking.js.map