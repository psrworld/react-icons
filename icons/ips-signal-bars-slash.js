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
export const IpsSignalBarsSlashIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-signal-bars-slash ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-signal-bars-slash" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L608 451.2 608 48c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 328-64-50.2L448 176c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 74.6L38.8 5.1zM288 322.9l-74.7-58.8C200.5 272.7 192 287.4 192 304l0 160c0 26.5 21.5 48 48 48s48-21.5 48-48l0-141.1zM448 464l0-15-96-75.6 0 90.7c0 26.5 21.5 48 48 48s48-21.5 48-48zM80 384c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48s48-21.5 48-48l0-32c0-26.5-21.5-48-48-48z" })] })));
};
export default IpsSignalBarsSlashIcon;
//# sourceMappingURL=ips-signal-bars-slash.js.map