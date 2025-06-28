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
export const IpsCircleThreeQuartersIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-circle-three-quarters ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-circle-three-quarters" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M256 32c0-17.7-14.4-32.2-31.9-30C97.8 17.7 0 125.4 0 256C0 397.4 114.6 512 256 512c130.6 0 238.3-97.8 254-224.1c2.2-17.5-12.4-31.9-30-31.9H256V32z" })] })));
};
export default IpsCircleThreeQuartersIcon;
//# sourceMappingURL=ips-circle-three-quarters.js.map