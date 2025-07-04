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
export const IpsCoinBlankIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-coin-blank ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-coin-blank" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 208c0 79.5 114.6 144 256 144s256-64.5 256-144s-114.6-144-256-144S0 128.5 0 208zm0 82.1L0 320c0 27.9 17.8 53.6 48 74.6L48 331c-18.3-11.5-34.8-25.2-48-40.9zM80 413c27.1 12.8 59.8 22.7 96 28.7l0-64.3c-35.1-6-67.6-15.9-96-29L80 413zm128 32.8c15.5 1.5 31.6 2.2 48 2.2s32.5-.8 48-2.2l0-64.1c-15.7 1.6-31.7 2.4-48 2.4s-32.3-.8-48-2.4l0 64.1zm128-4.1c36.2-6 68.9-15.9 96-28.7l0-64.7c-28.4 13.2-60.9 23-96 29l0 64.3zm128-47c30.2-21 48-46.8 48-74.6l0-29.9c-13.2 15.6-29.7 29.3-48 40.9l0 63.7z" })] })));
};
export default IpsCoinBlankIcon;
//# sourceMappingURL=ips-coin-blank.js.map