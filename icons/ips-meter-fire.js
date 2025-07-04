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
export const IpsMeterFireIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-meter-fire ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-meter-fire" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M256 512c33.6 0 65.7-6.5 95.1-18.3c-39-35.9-63.1-87.5-63.1-143.7c0-35.2 16.3-73.6 37.2-107.4c4.4-7.1 9.1-14.2 14.1-21.3C327.9 216.5 320 205.2 320 192l0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 7.4c9-9.4 18.5-18.6 28.5-27.5C430.2 124 457.3 124 475 140c5.6 5.1 11.1 10.2 16.6 15.5C452.5 64.1 361.7 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512zM192 160l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32s32 14.3 32 32zm96 0l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32s32 14.3 32 32zm217.7 48.1l-19-19.9c-2-2.1-4-4.4-6-6.7c0 0 0 0 0 0c-9-10.2-18.6-21.3-32.7-21.6c-7.3-.2-14.6 2.3-20.3 7.5c-23.4 21.1-50 48.9-70.9 80.2C336 278.6 320 314.7 320 352c0 88.6 70.4 159.8 160 159.8c88.7 0 160-71.2 160-159.8c0-30-11-60.9-26.2-88.1c-15.2-27.4-35.3-52.3-55-70.6c-5.6-5.2-12.8-7.8-19.9-7.8c-7.6 0-15.5 2.8-20.9 8.9l-12.3 13.8zM544 400c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-36.5 37-73 54.8-88.4c5.4-4.7 13.1-4.7 18.5 0C507 327 544 363.5 544 400z" })] })));
};
export default IpsMeterFireIcon;
//# sourceMappingURL=ips-meter-fire.js.map