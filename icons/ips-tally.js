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
export const IpsTallyIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-tally ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-tally" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M128 32c17.7 0 32 14.3 32 32l0 211.6 64-21.3L224 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 168.9 64-21.3L352 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 126.3 64-21.3L480 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 83.6 53.9-18c16.8-5.6 34.9 3.5 40.5 20.2s-3.5 34.9-20.2 40.5L544 215.1 544 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-211.6-64 21.3L416 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-168.9-64 21.3L288 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-126.3-64 21.3L160 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-83.6-53.9 18c-16.8 5.6-34.9-3.5-40.5-20.2s3.5-34.9 20.2-40.5L96 296.9 96 64c0-17.7 14.3-32 32-32z" })] })));
};
export default IpsTallyIcon;
//# sourceMappingURL=ips-tally.js.map