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
export const IpbCloudsmithIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon brands-icon ipb-cloudsmith ${className}`, style: style, onClick: onClick, "data-category": "brands", "data-prefix": "ipb", "data-icon": "ipb-cloudsmith" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M512 227.6v56.9L284.4 512H227.6L0 284.4V227.6L227.6 0h56.9L512 227.6zm-256 162a133.6 133.6 0 1 0 0-267.1 133.6 133.6 0 1 0 0 267.1z" })] })));
};
export default IpbCloudsmithIcon;
//# sourceMappingURL=ipb-cloudsmith.js.map