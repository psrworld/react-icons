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
export const IpsPinballIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-pinball ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-pinball" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M352 224a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm22.1 254.4c14.9 4.8 30.7-1.8 37.9-15c7.4-13.5 4.2-30.8-8.4-40.6l-246-208.3c-40.6-34.1-101.2-28.8-135.2 11.8S-6.3 327.5 34.3 361.6c9.2 7.7 19.9 13.8 32 17.7l307.8 99.1zM64 288a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" })] })));
};
export default IpsPinballIcon;
//# sourceMappingURL=ips-pinball.js.map