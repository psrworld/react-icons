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
export const IpsBracketsSquareIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-brackets-square ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-brackets-square" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0 0-320-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0zM64 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L64 96l0 320 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32z" })] })));
};
export default IpsBracketsSquareIcon;
//# sourceMappingURL=ips-brackets-square.js.map