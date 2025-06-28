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
export const IpsLampStreetIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-lamp-street ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-lamp-street" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 176c0-61.9 50.1-112 112-112c57.4 0 104.7 43.2 111.2 98.8C207.1 176.6 144 239.9 130.6 320.1C127.7 337.6 142.3 352 160 352l320 0c17.7 0 32.3-14.4 29.4-31.9c-13.5-80.6-77.2-144.2-157.9-157.6C344.6 71.6 268.7 0 176 0C78.8 0 0 78.8 0 176L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-304zM320 448c35.3 0 64-28.7 64-64l-128 0c0 35.3 28.7 64 64 64z" })] })));
};
export default IpsLampStreetIcon;
//# sourceMappingURL=ips-lamp-street.js.map