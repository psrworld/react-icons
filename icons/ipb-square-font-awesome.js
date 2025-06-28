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
export const IpbSquareFontAwesomeIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon brands-icon ipb-square-font-awesome ${className}`, style: style, onClick: onClick, "data-category": "brands", "data-prefix": "ipb", "data-icon": "ipb-square-font-awesome" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm90 122c0 9.3-4.8 17.4-12.1 22l188.9 0c7.3 0 13.2 5.9 13.2 13.2c0 1.8-.4 3.7-1.1 5.4L312 264l30.9 69.4c.7 1.7 1.1 3.5 1.1 5.4c0 7.3-5.9 13.2-13.2 13.2L144 352l0 32-32 0 0-32 0-176 0-1.5c-6.1-4.8-10-12.2-10-20.5c0-14.4 11.6-26 26-26s26 11.6 26 26z" })] })));
};
export default IpbSquareFontAwesomeIcon;
//# sourceMappingURL=ipb-square-font-awesome.js.map