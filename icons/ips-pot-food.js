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
export const IpsPotFoodIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-pot-food ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-pot-food" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M112 24c0 26.5 10.5 38.7 25.9 56.1l.4 .4C154.8 99 176 122.9 176 168c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-26.5-10.5-38.7-25.9-56.1l-.4-.4C85.2 93 64 69.1 64 24C64 10.7 74.7 0 88 0s24 10.7 24 24zm112 0c0 26.5 10.5 38.7 25.9 56.1l.4 .4C266.8 99 288 122.9 288 168c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-26.5-10.5-38.7-25.9-56.1l-.4-.4C197.2 93 176 69.1 176 24c0-13.3 10.7-24 24-24s24 10.7 24 24zm208 88c50.7 0 93.6 33.7 107.4 80l-214.7 0c13.8-46.3 56.6-80 107.4-80zM77.7 320L48 320c-17.7 0-32-14.3-32-32s14.3-32 32-32l17.9 0c-.2-17.5 14-32 31.7-32l444.8 0c17.7 0 31.9 14.5 31.7 32l17.9 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.7 0c-20.6 64-66.1 116.7-124.7 147.2l-1.2 9.7c-2.5 20-19.5 35-39.7 35l-153.4 0c-20.2 0-37.2-15-39.7-35l-1.2-9.7C143.8 436.7 98.3 384 77.7 320z" })] })));
};
export default IpsPotFoodIcon;
//# sourceMappingURL=ips-pot-food.js.map