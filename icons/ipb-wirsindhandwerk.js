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
export const IpbWirsindhandwerkIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon brands-icon ipb-wirsindhandwerk ${className}`, style: style, onClick: onClick, "data-category": "brands", "data-prefix": "ipb", "data-icon": "ipb-wirsindhandwerk" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M50.77161,479.81213h83.36071V367.84741l-83.36071,47.009Zm329.04675,0h82.35022V414.85645l-82.35022-47.009Zm.00568-448V251.568L256.1759,179.1861,134.50378,251.568V31.81213H50.77161V392.60565L256.1759,270.31909,462.16858,392.60565V31.81213Z" })] })));
};
export default IpbWirsindhandwerkIcon;
//# sourceMappingURL=ipb-wirsindhandwerk.js.map