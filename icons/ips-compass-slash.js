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
export const IpsCompassSlashIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-compass-slash ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-compass-slash" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-95.4-74.8C561.1 354.5 576 307 576 256C576 114.6 461.4 0 320 0C246.8 0 180.9 30.7 134.2 79.9L38.8 5.1zM270.3 186.5l143.3-55.1c19.4-7.5 38.5 11.6 31 31L397.1 285.9 270.3 186.5zM320 512c55.2 0 106.3-17.5 148.1-47.2L317 345.8l-90.6 34.8c-19.4 7.5-38.5-11.6-31-31l29.4-76.5L82.3 160.8C70.5 190.2 64 222.4 64 256c0 141.4 114.6 256 256 256z" })] })));
};
export default IpsCompassSlashIcon;
//# sourceMappingURL=ips-compass-slash.js.map