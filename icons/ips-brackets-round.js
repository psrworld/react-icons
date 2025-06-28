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
export const IpsBracketsRoundIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-brackets-round ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-brackets-round" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M145.8 90.6c14.7-9.8 18.7-29.7 8.9-44.4s-29.7-18.7-44.4-8.9C71.9 62.9 0 140.2 0 256S71.9 449 110.2 474.6c14.7 9.8 34.6 5.8 44.4-8.9s5.8-34.6-8.9-44.4C120.1 404.3 64 345 64 256s56.1-148.3 81.8-165.4zm220.5 0C391.9 107.7 448 167 448 256s-56.1 148.3-81.8 165.4c-14.7 9.8-18.7 29.7-8.9 44.4s29.7 18.7 44.4 8.9C440.1 449.1 512 371.8 512 256s-71.9-193.1-110.2-218.6c-14.7-9.8-34.6-5.8-44.4 8.9s-5.8 34.6 8.9 44.4z" })] })));
};
export default IpsBracketsRoundIcon;
//# sourceMappingURL=ips-brackets-round.js.map