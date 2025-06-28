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
export const IpsPumpIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-pump ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-pump" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M128 32c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L160 0c-17.7 0-32 14.3-32 32zM32 176c-17.7 0-32 14.3-32 32L0 384c0 17.7 14.3 32 32 32s32-14.3 32-32l0-176c0-17.7-14.3-32-32-32zm128 48l-64 0 0 160 224 0 0-288L160 96l0 128zM431.9 106.7L380.5 141c-17.8 11.9-28.5 31.9-28.5 53.3l0 219.5c0 21.4 10.7 41.4 28.5 53.3l51.4 34.3c10.5 7 22.9 10.7 35.5 10.7L576 512c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L467.4 96c-12.6 0-25 3.7-35.5 10.7zM448 208c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16zm0 96c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16zm0 96c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16z" })] })));
};
export default IpsPumpIcon;
//# sourceMappingURL=ips-pump.js.map