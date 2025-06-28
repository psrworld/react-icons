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
export const IpsComputerMouseScrollwheelIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-computer-mouse-scrollwheel ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-computer-mouse-scrollwheel" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M160 0C71.6 0 0 71.6 0 160L0 352c0 88.4 71.6 160 160 160l64 0c88.4 0 160-71.6 160-160l0-192C384 71.6 312.4 0 224 0L160 0zm64 128l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32s32 14.3 32 32z" })] })));
};
export default IpsComputerMouseScrollwheelIcon;
//# sourceMappingURL=ips-computer-mouse-scrollwheel.js.map