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
export const IpsOliveBranchIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-olive-branch ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-olive-branch" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M2.7 53.1C13.8 41.6 59 0 128 0c66.9 0 111.4 39.1 124.2 52L306 26.7C343.3 9.1 384 0 425.2 0L616 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L425.2 48c-34.2 0-67.9 7.5-98.8 22.1L191.9 133.4C189.1 219.3 118.6 288 32 288l-16 0c-8.8 0-16-7.2-16-16l0-16c0-61.4 34.5-114.6 85.2-141.5C40.4 102.8 11.3 75.8 2.7 66.9C.9 65 0 62.6 0 60s.9-5 2.7-6.9zM480 320c0 106-64.5 192-144 192s-144-86-144-192s64.5-192 144-192s144 86 144 192zM465.7 471.8c29.2-40.5 46.3-94 46.3-151.8c0-59.3-18-114.2-48.6-155c-10.5-14-22.7-26.5-36.2-36.9c48.2 1.6 101.3 25.8 144.2 70.3c75 77.8 90.2 188.1 33.9 246.4c-34.1 35.4-86.8 43.5-139.6 27z" })] })));
};
export default IpsOliveBranchIcon;
//# sourceMappingURL=ips-olive-branch.js.map