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
export const IpsCarWashIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-car-wash ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-car-wash" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 128c26.5 0 48-16 48-48c0-22.2-23-52-37.2-68.2C69 5.1 59 5.1 53.2 11.8C39 28 16 57.8 16 80c0 26.5 21.5 48 48 48zm160 0c26.5 0 48-16 48-48c0-22.2-23-52-37.2-68.2c-5.8-6.7-15.9-6.7-21.7 0C199 28 176 57.8 176 80c0 26.5 21.5 48 48 48zM432 80c0-22.2-23-52-37.2-68.2c-5.8-6.7-15.9-6.7-21.7 0C359 28 336 57.8 336 80c0 26.5 21.5 48 48 48s48-16 48-48zM153.8 224l140.3 0c6.8 0 12.8 4.3 15.1 10.6L328.3 288l-208.6 0 19.1-53.4c2.3-6.4 8.3-10.6 15.1-10.6zM78.5 213.1L50.2 292.4C30.1 300.9 16 320.8 16 344l0 40 0 64 0 32c0 17.7 14.3 32 32 32l16 0c17.7 0 32-14.3 32-32l0-32 256 0 0 32c0 17.7 14.3 32 32 32l16 0c17.7 0 32-14.3 32-32l0-32 0-64 0-40c0-23.2-14.1-43.1-34.2-51.6l-28.3-79.3C358.1 181.3 328 160 294.2 160l-140.3 0c-33.8 0-64 21.3-75.3 53.1zM96 344a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm232 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" })] })));
};
export default IpsCarWashIcon;
//# sourceMappingURL=ips-car-wash.js.map