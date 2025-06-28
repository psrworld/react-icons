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
export const IpsToriiGateIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-torii-gate ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-torii-gate" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 80c0 26.5 21.5 48 48 48l16 0 0 64 64 0 0-64 96 0 0 64 64 0 0-64 96 0 0 64 64 0 0-64 16 0c26.5 0 48-21.5 48-48l0-66.6C512 6 506 0 498.6 0c-1.7 0-3.4 .3-5 1l-49 19.6C425.7 28.1 405.5 32 385.2 32L126.8 32c-20.4 0-40.5-3.9-59.4-11.4L18.4 1c-1.6-.6-3.3-1-5-1C6 0 0 6 0 13.4L0 80zM64 288l0 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-192 256 0 0 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-192 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0z" })] })));
};
export default IpsToriiGateIcon;
//# sourceMappingURL=ips-torii-gate.js.map