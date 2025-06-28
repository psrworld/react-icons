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
export const IpsFaceLyingIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-face-lying ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-face-lying" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M494 350.5c-4.5 1-9.2 1.5-14 1.5l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l192 0c11.2 0 21.7 2.9 30.9 7.9C498.8 101.8 389.3 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c108 0 200.4-66.9 238-161.5zM144.4 176a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm160 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM188.8 393.6c-5.3 7.1-15.3 8.5-22.4 3.2s-8.5-15.3-3.2-22.4C180.7 351.1 208.6 336 240 336c13.6 0 26.6 2.8 38.4 8c8.1 3.5 11.8 13 8.3 21.1s-13 11.8-21.1 8.3c-7.8-3.4-16.5-5.3-25.6-5.3c-20.9 0-39.5 10-51.2 25.6z" })] })));
};
export default IpsFaceLyingIcon;
//# sourceMappingURL=ips-face-lying.js.map