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
export const IpsEuroSignIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 320 512", fill: color, className: `react-icon solid-icon ips-euro-sign ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-euro-sign" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M48.1 240c-.1 2.7-.1 5.3-.1 8l0 16c0 2.7 0 5.3 .1 8L32 272c-17.7 0-32 14.3-32 32s14.3 32 32 32l28.3 0C89.9 419.9 170 480 264 480l24 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-24 0c-57.9 0-108.2-32.4-133.9-80L256 336c17.7 0 32-14.3 32-32s-14.3-32-32-32l-143.8 0c-.1-2.6-.2-5.3-.2-8l0-16c0-2.7 .1-5.4 .2-8L256 240c17.7 0 32-14.3 32-32s-14.3-32-32-32l-125.9 0c25.7-47.6 76-80 133.9-80l24 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-24 0C170 32 89.9 92.1 60.3 176L32 176c-17.7 0-32 14.3-32 32s14.3 32 32 32l16.1 0z" })] })));
};
export default IpsEuroSignIcon;
//# sourceMappingURL=ips-euro-sign.js.map