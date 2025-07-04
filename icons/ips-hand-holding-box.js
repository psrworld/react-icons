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
export const IpsHandHoldingBoxIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-hand-holding-box ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-hand-holding-box" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M224 121.7c0 3.5 2.8 6.3 6.3 6.3c1.1 0 2.2-.3 3.1-.8l46.6-26.6c4.9-2.8 11-2.8 15.9 0l46.6 26.6c1 .5 2 .8 3.1 .8c3.5 0 6.3-2.8 6.3-6.3L352 0l80 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-288 0c-26.5 0-48-21.5-48-48L96 48c0-26.5 21.5-48 48-48l80 0 0 121.7zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5L192 512 32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l36.8 0 44.9-36c22.7-18.2 50.9-28 80-28l78.3 0 16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l120.6 0 119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384c0 0 0 0 0 0l-.9 0c.3 0 .6 0 .9 0z" })] })));
};
export default IpsHandHoldingBoxIcon;
//# sourceMappingURL=ips-hand-holding-box.js.map