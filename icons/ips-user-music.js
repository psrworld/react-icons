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
export const IpsUserMusicIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-user-music ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-user-music" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM178.3 304l91.4 0c36.3 0 70.1 10.9 98.3 29.5l0 51.6c-18 2.5-34.8 9.1-48.5 19.4c-17.6 13.2-31.5 34-31.5 59.5c0 19.1 7.7 35.4 18.9 48L29.7 512C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304zM630 164.5c6.3 4.5 10 11.8 10 19.5l0 48 0 160c0 1.2-.1 2.4-.3 3.6c.2 1.5 .3 2.9 .3 4.4c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48c5.5 0 10.9 .5 16 1.5l0-88.2-144 48L448 464c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48c5.5 0 10.9 .5 16 1.5L400 296l0-48c0-10.3 6.6-19.5 16.4-22.8l192-64c7.3-2.4 15.4-1.2 21.6 3.3z" })] })));
};
export default IpsUserMusicIcon;
//# sourceMappingURL=ips-user-music.js.map