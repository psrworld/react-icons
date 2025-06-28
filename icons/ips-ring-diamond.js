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
export const IpsRingDiamondIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-ring-diamond ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-ring-diamond" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M122.5 13.3C126.6 5.1 134.9 0 144 0l96 0c9.1 0 17.4 5.1 21.5 13.3l24 48c3.5 7.1 3.4 15.5-.5 22.4l-30.4 54.8C329.9 164.4 384 235.9 384 320c0 106-86 192-192 192S0 426 0 320c0-84.1 54.1-155.6 129.4-181.6L99 83.7c-3.8-6.9-4-15.3-.5-22.4l24-48zM192 192a128 128 0 1 0 0 256 128 128 0 1 0 0-256z" })] })));
};
export default IpsRingDiamondIcon;
//# sourceMappingURL=ips-ring-diamond.js.map