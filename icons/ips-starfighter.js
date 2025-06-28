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
export const IpsStarfighterIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-starfighter ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-starfighter" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M353.8 14L384 256l0 208c0 8.8-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16l0-208L286.2 14c1-8 7.8-14 15.9-14l35.8 0c8.1 0 14.9 6 15.9 14zM288 256l0 48c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zM48 72c13.3 0 24 10.7 24 24l0 24c13.3 0 24 10.7 24 24s-10.7 24-24 24l0 184 56 0 0-32c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 32 0 64 0 32 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-9.6L72 444l0 4c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-280c-13.3 0-24-10.7-24-24s10.7-24 24-24l0-24c0-13.3 10.7-24 24-24zm544 0c13.3 0 24 10.7 24 24l0 24c13.3 0 24 10.7 24 24s-10.7 24-24 24l0 280c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-4-88 26.4 0 9.6c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32 0-32 0-64 0-32c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 32 56 0 0-184c-13.3 0-24-10.7-24-24s10.7-24 24-24l0-24c0-13.3 10.7-24 24-24z" })] })));
};
export default IpsStarfighterIcon;
//# sourceMappingURL=ips-starfighter.js.map