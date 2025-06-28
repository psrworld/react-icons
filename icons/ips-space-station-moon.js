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
export const IpsSpaceStationMoonIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-space-station-moon ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-space-station-moon" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M512 256c0 7.8-.3 15.5-1 23.1C438.8 304.7 351.2 320 256 320s-182.8-15.3-255-40.9c-.7-7.6-1-15.3-1-23.1C0 114.6 114.6 0 256 0S512 114.6 512 256zM256 512C134.9 512 33.4 427.9 6.8 314.8C79.4 338.4 164.7 352 256 352s176.6-13.6 249.2-37.2C478.6 427.9 377.1 512 256 512zM160 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm112 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0z" })] })));
};
export default IpsSpaceStationMoonIcon;
//# sourceMappingURL=ips-space-station-moon.js.map