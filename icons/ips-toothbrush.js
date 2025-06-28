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
export const IpsToothbrushIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-toothbrush ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-toothbrush" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 224c-35.3 0-64-28.7-64-64s28.7-64 64-64l224 0c31.2 0 38.2-22.7 39.6-48c.5-8.8 7.6-16.1 16.4-15.2c52.4 5.3 104 36.7 104 95.2c0 53-43 96-96 96L64 224zm-8 32c13.3 0 24 10.7 24 24l0 136 32 0 0-136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 136 32 0 0-136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 136 32 0 0-136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 136 32 0 0-136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 136 144 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-136c0-13.3 10.7-24 24-24z" })] })));
};
export default IpsToothbrushIcon;
//# sourceMappingURL=ips-toothbrush.js.map