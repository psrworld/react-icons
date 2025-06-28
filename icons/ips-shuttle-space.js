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
export const IpsShuttleSpaceIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-shuttle-space ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-shuttle-space" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M130 480c40.6 0 80.4-11 115.2-31.9L352 384l-224 0 0 96 2 0zM352 128L245.2 63.9C210.4 43 170.6 32 130 32l-2 0 0 96 224 0zM96 128l0-96L80 32C53.5 32 32 53.5 32 80l0 48 8 0c-22.1 0-40 17.9-40 40l0 16L0 328l0 16c0 22.1 17.9 40 40 40l-8 0 0 48c0 26.5 21.5 48 48 48l16 0 0-96 8 0c26.2 0 49.4-12.6 64-32l288 0c69.3 0 135-22.7 179.2-81.6c6.4-8.5 6.4-20.3 0-28.8C591 182.7 525.3 160 456 160l-288 0c-14.6-19.4-37.8-32-64-32l-8 0zM512 243.6l0 24.9c0 19.6-15.9 35.6-35.6 35.6c-2.5 0-4.4-2-4.4-4.4l0-87.1c0-2.5 2-4.4 4.4-4.4c19.6 0 35.6 15.9 35.6 35.6z" })] })));
};
export default IpsShuttleSpaceIcon;
//# sourceMappingURL=ips-shuttle-space.js.map