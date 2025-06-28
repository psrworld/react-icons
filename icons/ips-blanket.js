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
export const IpsBlanketIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-blanket ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-blanket" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 128L0 352c0 70.7 57.3 128 128 128l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0c-35.3 0-64-28.7-64-64s28.7-64 64-64l240 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-240 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l240 0c44.2 0 80-35.8 80-80l0-176c0-53-43-96-96-96L96 32C43 32 0 75 0 128z" })] })));
};
export default IpsBlanketIcon;
//# sourceMappingURL=ips-blanket.js.map