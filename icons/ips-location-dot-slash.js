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
export const IpsLocationDotSlashIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-location-dot-slash ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-location-dot-slash" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L459 334.5c30-51.6 53-103.7 53-142.5C512 86 426 0 320 0C249.2 0 187.3 38.4 154 95.4L38.8 5.1zm219 171.7c6.8-28 32.1-48.8 62.2-48.8c35.3 0 64 28.7 64 64c0 24.7-13.9 46-34.4 56.7l-91.8-72zm85.9 322.4c16.2-20.2 39-49.6 62.5-83.1L128.1 196.9c4.2 88.2 117.8 239.3 168.2 302.2c12.3 15.3 35.1 15.3 47.4 0z" })] })));
};
export default IpsLocationDotSlashIcon;
//# sourceMappingURL=ips-location-dot-slash.js.map