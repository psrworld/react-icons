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
export const IpsDiagramPreviousIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-diagram-previous ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-diagram-previous" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M448 352L64 352l0 64 384 0 0-64zm0-64c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l168 0 0-64-46.1 0c-21.4 0-32.1-25.9-17-41L239 113c9.4-9.4 24.6-9.4 33.9 0L343 183c15.1 15.1 4.4 41-17 41L280 224l0 64 168 0zM365.7 160.4L295.6 90.3c-21.9-21.9-57.3-21.9-79.2 0l-70.1 70.1c-18.4 18.4-20.4 43.7-11 63.6L64 224c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-71.3 0c9.4-19.9 7.4-45.2-11-63.6z" })] })));
};
export default IpsDiagramPreviousIcon;
//# sourceMappingURL=ips-diagram-previous.js.map