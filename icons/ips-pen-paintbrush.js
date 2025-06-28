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
export const IpsPenPaintbrushIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-pen-paintbrush ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-pen-paintbrush" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M95.6 16.4L226.3 147.1l-79.2 79.2L16.4 95.6c-21.9-21.9-21.9-57.3 0-79.2s57.3-21.9 79.2 0zM400 512c-53.6 0-98.5-37.7-109.4-88.1L423.9 290.6c50.3 11 88.1 55.8 88.1 109.4c0 3.9-.2 7.8-.6 11.6c-1.8 17.5 10.2 36.4 27.8 36.4l4.8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-144 0zM501.3 19.3l23.4 23.4c25 25 25 65.5 0 90.5l-56.4 56.4L354.3 75.7l56.4-56.4c25-25 65.5-25 90.5 0zM76.9 353.2L331.7 98.3 445.7 212.3 190.8 467.1c-6.7 6.7-15.1 11.6-24.2 14.2l-104 29.7c-8.4 2.4-17.4 .1-23.6-6.1s-8.5-15.2-6.1-23.6l29.7-104c2.6-9.2 7.5-17.5 14.2-24.2z" })] })));
};
export default IpsPenPaintbrushIcon;
//# sourceMappingURL=ips-pen-paintbrush.js.map