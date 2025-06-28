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
export const IpsUmbrellaSimpleIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-umbrella-simple ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-umbrella-simple" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M256 0c17.7 0 32 14.3 32 32l0 2C403.8 48.4 495.6 140.2 510 256.1c2.2 17.5-12.4 31.9-30 31.9L32 288C14.3 288-.2 273.6 2 256.1C16.4 140.2 108.2 48.4 224 34l0-2c0-17.7 14.3-32 32-32zm32 430.6c0 45-36.5 81.4-81.4 81.4c-30.8 0-59-17.4-72.8-45l-2.3-4.7c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l2.3 4.7c3 5.9 9 9.6 15.6 9.6c9.6 0 17.4-7.8 17.4-17.4L224 320l64 0 0 110.6z" })] })));
};
export default IpsUmbrellaSimpleIcon;
//# sourceMappingURL=ips-umbrella-simple.js.map