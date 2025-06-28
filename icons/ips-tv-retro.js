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
export const IpsTvRetroIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-tv-retro ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-tv-retro" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M169 7c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l55 55L80 96C35.8 96 0 131.8 0 176L0 432c0 44.2 35.8 80 80 80l352 0c44.2 0 80-35.8 80-80l0-256c0-44.2-35.8-80-80-80L321.9 96l55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-87 87L169 7zM424 232a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm24 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM64 224c0-35.3 28.7-64 64-64l192 0c35.3 0 64 28.7 64 64l0 160c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-160z" })] })));
};
export default IpsTvRetroIcon;
//# sourceMappingURL=ips-tv-retro.js.map