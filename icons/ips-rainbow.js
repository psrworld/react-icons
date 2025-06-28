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
export const IpsRainbowIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-rainbow ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-rainbow" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M320 96C178.6 96 64 210.6 64 352l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96C0 175.3 143.3 32 320 32s320 143.3 320 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96C576 210.6 461.4 96 320 96zm0 192c-35.3 0-64 28.7-64 64l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-70.7 57.3-128 128-128s128 57.3 128 128l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-35.3-28.7-64-64-64zM160 352l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-123.7 100.3-224 224-224s224 100.3 224 224l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-88.4-71.6-160-160-160s-160 71.6-160 160z" })] })));
};
export default IpsRainbowIcon;
//# sourceMappingURL=ips-rainbow.js.map