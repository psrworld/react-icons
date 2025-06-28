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
export const IpsBallPileIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-ball-pile ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-ball-pile" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M288 160A80 80 0 1 0 288 0a80 80 0 1 0 0 160zM176 328a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM160 432A80 80 0 1 0 0 432a80 80 0 1 0 160 0zm128 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm288-80a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM400 328a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" })] })));
};
export default IpsBallPileIcon;
//# sourceMappingURL=ips-ball-pile.js.map