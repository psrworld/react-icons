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
export const IpsLampIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-lamp ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-lamp" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M82.5 19.7C87.4 7.8 99.1 0 112 0L336 0c12.9 0 24.6 7.8 29.5 19.7l80 192c4.1 9.9 3 21.2-2.9 30.1s-15.9 14.2-26.6 14.2L32 256c-10.7 0-20.7-5.3-26.6-14.2s-7-20.2-2.9-30.1l80-192zM160 288l128 0 0 32s64 50.5 64 112c0 24.4-8.3 44.6-16.4 58.7c-8.5 14.7-25.2 21.3-42.1 21.3l-139 0c-17 0-33.6-6.6-42.1-21.3C104.3 476.6 96 456.4 96 432c0-61.5 64-112 64-112l0-32z" })] })));
};
export default IpsLampIcon;
//# sourceMappingURL=ips-lamp.js.map