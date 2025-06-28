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
export const IpsPianoIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-piano ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-piano" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 192L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-120.4c0-24.2-13.7-46.4-35.4-57.2l-58.4-29.2c-21-10.5-34.2-31.9-34.2-55.4C384 83.2 300.8 0 198.3 0L192 0C86 0 0 86 0 192zM416 352l32 0 0 96L64 448l0-96 32 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 32 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 32 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 64 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 32 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48z" })] })));
};
export default IpsPianoIcon;
//# sourceMappingURL=ips-piano.js.map