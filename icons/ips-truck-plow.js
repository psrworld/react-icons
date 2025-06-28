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
export const IpsTruckPlowIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-truck-plow ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-truck-plow" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M192 96l0 96 135.5 0L269.9 96 192 96zm-64 96l0-112c0-26.5 21.5-48 48-48l93.9 0c22.5 0 43.3 11.8 54.9 31.1L402.1 192l45.9 0c17.7 0 32 14.3 32 32l0 64 32 0 0-112c0-7.3 2.5-14.3 7-20l64-80c11-13.8 31.2-16 45-5s16 31.2 5 45l-57 71.2L576 320l0 36.8L633 428c11 13.8 8.8 33.9-5 45s-33.9 8.8-45-5l-64-80c-4.5-5.7-7-12.7-7-20l0-16-37.5 0c3.5 10 5.5 20.8 5.5 32c0 53-43 96-96 96s-96-43-96-96c0-11.2 1.9-22 5.5-32L224 352c-1.9 0-3.8-.2-5.6-.5c3.7 10.2 5.6 21.1 5.6 32.5c0 53-43 96-96 96s-96-43-96-96c0-11.2 1.9-22 5.5-32L32 352c-17.7 0-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32l96 0zm32 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm256 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" })] })));
};
export default IpsTruckPlowIcon;
//# sourceMappingURL=ips-truck-plow.js.map