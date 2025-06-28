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
export const IpsBowlScoopIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-bowl-scoop ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-bowl-scoop" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M32 224l384 0c0-106-86-192-192-192S32 118 32 224zM16 256c-4.6 0-9 2-12 5.4s-4.5 8-3.9 12.6l2 15.9C11.1 361.9 72.4 416 145 416l40.4 0-68.7 68.7c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9l192 0c6.5 0 12.3-3.9 14.8-9.9s1.1-12.9-3.5-17.4L262.6 416l40.4 0c72.6 0 133.9-54.1 142.9-126.1l2-15.9c.6-4.6-.8-9.1-3.9-12.6s-7.4-5.4-12-5.4L16 256z" })] })));
};
export default IpsBowlScoopIcon;
//# sourceMappingURL=ips-bowl-scoop.js.map