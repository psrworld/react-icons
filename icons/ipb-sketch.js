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
export const IpbSketchIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon brands-icon ipb-sketch ${className}`, style: style, onClick: onClick, "data-category": "brands", "data-prefix": "ipb", "data-icon": "ipb-sketch" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M27.5 162.2L9 187.1h90.5l6.9-130.7-78.9 105.8zM396.3 45.7L267.7 32l135.7 147.2-7.1-133.5zM112.2 218.3l-11.2-22H9.9L234.8 458zm2-31.2h284l-81.5-88.5L256.3 33zm297.3 9.1L277.6 458l224.8-261.7h-90.9zM415.4 69L406 56.4l.9 17.3 6.1 113.4h90.3zM113.5 93.5l-4.6 85.6L244.7 32 116.1 45.7zm287.7 102.7h-290l42.4 82.9L256.3 480l144.9-283.8z" })] })));
};
export default IpbSketchIcon;
//# sourceMappingURL=ipb-sketch.js.map