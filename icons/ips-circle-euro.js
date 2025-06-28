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
export const IpsCircleEuroIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-circle-euro ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-circle-euro" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM128 272l16 0c-.6-5-.9-10.1-.9-15.2c0-5.7 .4-11.3 1.1-16.8L128 240c-8.8 0-16-7.2-16-16s7.2-16 16-16l24.7 0c19.2-46.9 65.4-80 119.2-80l41.1 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-41.1 0c-26.3 0-49.6 12.6-64.4 32l80.5 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-95.1 0c-1.1 5.4-1.7 11-1.7 16.8c0 5.2 .5 10.3 1.4 15.2l95.4 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-81.6 0c14.7 20.3 38.5 33.5 65.5 33.5l41.1 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-41.1 0c-54.4 0-101-33.8-119.8-81.5L128 304c-8.8 0-16-7.2-16-16s7.2-16 16-16z" })] })));
};
export default IpsCircleEuroIcon;
//# sourceMappingURL=ips-circle-euro.js.map