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
export const IpsBootHeeledIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-boot-heeled ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-boot-heeled" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M128 0L63.3 0C46 0 32 14 32 31.3c0 1.8 .1 3.9 .6 6.2C34.6 47.1 56 154.3 56 232c0 33.2-12.8 93.5-19.7 123.2C33.6 367 32 379.3 32 391.8L32 488c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-15.1 125 34.7c10.5 2.9 21.3 4.4 32.1 4.4L456 512l32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-34.3c0-27.3-15.4-52.2-39.8-64.4L327.8 309.1c-24.4-12.2-39.8-37.1-39.8-64.4L288 24c0-13.3-10.7-24-24-24L160 0l0 240c0 8.8-7.2 16-16 16s-16-7.2-16-16L128 0z" })] })));
};
export default IpsBootHeeledIcon;
//# sourceMappingURL=ips-boot-heeled.js.map