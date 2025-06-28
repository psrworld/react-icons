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
export const IpsPalletBoxesIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-pallet-boxes ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-pallet-boxes" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 32C64 14.3 78.3 0 96 0L288 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32L96 256c-17.7 0-32-14.3-32-32L64 32zM384 96c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-128zM0 352c0-17.7 14.3-32 32-32l64 0 224 0 224 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 64 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-224 0L96 512l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-64-32 0c-17.7 0-32-14.3-32-32zm128 96l160 0 0-64-160 0 0 64zm224 0l160 0 0-64-160 0 0 64z" })] })));
};
export default IpsPalletBoxesIcon;
//# sourceMappingURL=ips-pallet-boxes.js.map