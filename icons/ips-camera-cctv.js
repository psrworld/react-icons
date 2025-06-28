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
export const IpsCameraCctvIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-camera-cctv ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-camera-cctv" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M140.3 2.5c-14.9-6.2-32.1-.3-40.1 13.7l-96 168c-4.6 8-5.5 17.5-2.5 26.2s9.5 15.7 18 19.2l158.1 65.9L137.9 400 64 400l0-16c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 48 0 48c0 17.7 14.3 32 32 32s32-14.3 32-32l0-16 96 0c13.3 0 25.2-8.2 29.9-20.6l47-123.4 70.8 29.5c9.9 4.1 21.2 3 30.1-2.9l192-128c9.8-6.5 15.2-18 14.1-29.7s-8.6-21.9-19.5-26.5l-384-160zM513.4 398.6c3.9 1.8 8.4 1.9 12.5 .3s7.2-4.7 8.9-8.7l40-96c3.3-8-.3-17.2-8.3-20.8l-36.7-16.3L396.9 345.6l116.5 52.9z" })] })));
};
export default IpsCameraCctvIcon;
//# sourceMappingURL=ips-camera-cctv.js.map