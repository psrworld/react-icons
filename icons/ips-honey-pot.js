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
export const IpsHoneyPotIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-honey-pot ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-honey-pot" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M128 32L64 32C46.3 32 32 46.3 32 64s14.3 32 32 32C25.1 125.2 0 171.7 0 224C0 362.8 79.6 441.9 113.3 469.1c9.3 7.5 21.1 10.9 33.1 10.9l155.3 0c12 0 23.7-3.3 33.1-10.9C368.4 441.9 448 362.8 448 224c0-52.3-25.1-98.8-64-128c17.7 0 32-14.3 32-32s-14.3-32-32-32L176 32l0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-104zM64 224l320 0c0 53.7-14.7 96.1-32.9 128L96.9 352C78.7 320.1 64 277.7 64 224z" })] })));
};
export default IpsHoneyPotIcon;
//# sourceMappingURL=ips-honey-pot.js.map