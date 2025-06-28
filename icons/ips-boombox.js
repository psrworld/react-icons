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
export const IpsBoomboxIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-boombox ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-boombox" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M120 48l400 0c22.1 0 40 17.9 40 40l0 72-112 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l-32 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l-32 0c0-17.7-14.3-32-32-32s-32 14.3-32 32L80 160l0-72c0-22.1 17.9-40 40-40zM608 168.6L608 88c0-48.6-39.4-88-88-88L120 0C71.4 0 32 39.4 32 88l0 80.6C12.9 179.6 0 200.3 0 224L0 448c0 35.3 28.7 64 64 64l512 0c35.3 0 64-28.7 64-64l0-224c0-23.7-12.9-44.4-32-55.4zM256 336A80 80 0 1 0 96 336a80 80 0 1 0 160 0zM64 336a112 112 0 1 1 224 0A112 112 0 1 1 64 336zm400 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-192a112 112 0 1 1 0 224 112 112 0 1 1 0-224z" })] })));
};
export default IpsBoomboxIcon;
//# sourceMappingURL=ips-boombox.js.map