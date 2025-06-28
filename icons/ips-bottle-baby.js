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
export const IpsBottleBabyIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-bottle-baby ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-bottle-baby" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M220.6 49.7L224 48l0-16c0-17.7 14.3-32 32-32s32 14.3 32 32l0 16 3.4 1.7C308.9 58.5 320 76.4 320 96c17.7 0 32 14.3 32 32l0 32-192 0 0-32c0-17.7 14.3-32 32-32c0-19.6 11.1-37.5 28.6-46.3zM200 272l-84.4 0c4.5-19.6 13-38.1 25.2-54.4L160 192l192 0 19.2 25.6C389.9 242.5 400 272.8 400 304l0 144c0 35.3-28.7 64-64 64l-160 0c-35.3 0-64-28.7-64-64l0-16 88 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-88 0 0-64 88 0c13.3 0 24-10.7 24-24s-10.7-24-24-24z" })] })));
};
export default IpsBottleBabyIcon;
//# sourceMappingURL=ips-bottle-baby.js.map