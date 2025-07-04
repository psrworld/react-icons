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
export const IpsLightbulbSlashIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-lightbulb-slash ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-lightbulb-slash" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-195-152.8c4.4-6.2 8.9-12.4 13.4-18.6c0 0 0 0 0 0s0 0 0 0s0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C496 78.8 417.2 0 320 0C249.7 0 189.1 41.2 160.8 100.8L38.8 5.1zM213.3 141.9C227.7 96.7 270 64 320 64c8.8 0 16 7.2 16 16s-7.2 16-16 16c-40 0-73.1 29.3-79 67.6l-27.7-21.7zm-60.9 87.9c5.4 16.8 13.2 32.4 23 46.6c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l108.1 0L152.4 229.8zM240 416l0 16c0 44.2 35.8 80 80 80s80-35.8 80-80l0-7.1L388.7 416 240 416z" })] })));
};
export default IpsLightbulbSlashIcon;
//# sourceMappingURL=ips-lightbulb-slash.js.map