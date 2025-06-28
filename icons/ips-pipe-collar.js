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
export const IpsPipeCollarIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-pipe-collar ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-pipe-collar" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M18.7 18.7c25-25 65.5-25 90.5 0L126 35.4C164.1 12.9 208.5 0 256 0s91.9 12.9 130 35.4l16.7-16.7c25-25 65.5-25 90.5 0s25 65.5 0 90.5L476.6 126c22.5 38.1 35.4 82.6 35.4 130s-12.9 91.9-35.4 130l16.7 16.7c25 25 25 65.5 0 90.5s-65.5 25-90.5 0L386 476.6C347.9 499.1 303.5 512 256 512s-91.9-12.9-130-35.4l-16.7 16.7c-25 25-65.5 25-90.5 0s-25-65.5 0-90.5L35.4 386C12.9 347.9 0 303.5 0 256s12.9-91.9 35.4-130L18.7 109.3c-25-25-25-65.5 0-90.5zM64 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM256 416a160 160 0 1 0 0-320 160 160 0 1 0 0 320zM80 448a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM448 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm16 368a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" })] })));
};
export default IpsPipeCollarIcon;
//# sourceMappingURL=ips-pipe-collar.js.map